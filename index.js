// Datei: index.js

const { Command } = require('commander');
const fs = require('fs').promises;
const path = require('path');

const program = new Command();
const DATEI_PFAD = path.join(__dirname, 'todos.json');

// Standard-Datenstruktur der Aufgaben
// (Struktur data standar untuk tugas)
const STANDARD_TODOS = [];

// --- Hilfsfunktionen für I/O ---

/**
 * Lädt die Aufgaben aus der JSON-Datei.
 */
async function ladeTodos() {
    try {
        const daten = await fs.readFile(DATEI_PFAD, 'utf-8');
        return JSON.parse(daten);
    } catch (fehler) {
        if (fehler.code === 'ENOENT') {
            // Datei existiert nicht, leere Liste zurückgeben
            return STANDARD_TODOS;
        }
        throw fehler; 
    }
}

/**
 * Speichert die Aufgaben in der JSON-Datei.
 */
async function speichereTodos(todos) {
    const jsonDaten = JSON.stringify(todos, null, 2);
    await fs.writeFile(DATEI_PFAD, jsonDaten, 'utf-8');
}

// ------------------------------------------------------------------
// COMMANDER.JS DEFINITION
// ------------------------------------------------------------------

program
    .name('todo-de')
    .description('Ein einfaches Aufgabenlisten-Tool für die Kommandozeile.')
    .version('1.0.0');

// 1. Befehl: Hinzufügen (task: Aufgabe)
program
    .command('hinzufuegen <aufgabe>')
    .alias('add')
    .description('Fügt der Liste eine neue Aufgabe hinzu.')
    .action(async (aufgabe) => {
        let todos = await ladeTodos();
        const neueID = todos.length ? todos[todos.length - 1].id + 1 : 1;
        
        todos.push({
            id: neueID,
            aufgabe: aufgabe,
            erledigt: false, // erledigt = selesai
        });
        
        await speichereTodos(todos);
        console.log(`✅ Aufgabe [${aufgabe}] erfolgreich hinzugefügt!`);
    });

// 2. Befehl: Auflisten
program
    .command('auflisten')
    .alias('ls')
    .description('Zeigt alle Aufgaben in der Liste an.')
    .action(async () => {
        const todos = await ladeTodos();
        
        if (todos.length === 0) {
            console.log("Die Aufgabenliste ist leer. Fügen Sie eine Aufgabe hinzu!");
            return;
        }

        console.log("\n--- Ihre Aktuelle Aufgabenliste ---");
        todos.forEach(todo => {
            const status = todo.erledigt ? '✅' : '❌';
            console.log(`${status} [ID: ${todo.id}] ${todo.aufgabe}`);
        });
        console.log("----------------------------------");
    });

// 3. Befehl: Erledigen (Markiere als erledigt)
program
    .command('erledigen <id>')
    .description('Markiert eine Aufgabe als erledigt (ID eingeben).')
    .action(async (id) => {
        let todos = await ladeTodos();
        const numID = parseInt(id);
        
        const todo = todos.find(t => t.id === numID);
        
        if (todo) {
            todo.erledigt = true;
            await speichereTodos(todos);
            console.log(`✅ Aufgabe [ID: ${id}] als erledigt markiert.`);
        } else {
            console.log(`❌ Aufgabe mit ID ${id} nicht gefunden.`);
        }
    });

// Führt das Commander-Programm aus
program.parse(process.argv);
