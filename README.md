# 🚀 CLI-Tool: Aufgabenliste mit Commander.js

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Commander.js](https://img.shields.io/badge/CLI_Framework-Commander-blueviolet?style=flat-square)
![Typ](https://img.shields.io/badge/Typ-Kommandozeilen_Tool-red)

## Projektübersicht
Dieses Projekt demonstriert die Erstellung eines voll funktionsfähigen **CLI-Tools** (Command Line Interface) mit **Commander.js**. Es ermöglicht dem Benutzer, Aufgaben (*To-Dos*) direkt über die Konsole zu verwalten.

Die Logik verwendet das native `fs.promises`-Modul zur Speicherung der Aufgaben in einer lokalen `todos.json`-Datei, wodurch keine externe Datenbank erforderlich ist. Dies ist eine hervorragende Ergänzung für jedes Portfolio.

## 🛠️ Verwendete Technologien
* **Node.js**: Die Runtime-Umgebung.
* **Commander.js**: Zum Parsen von Befehlen und Argumenten der Kommandozeile.
* **fs.promises**: Zur Speicherung von Daten (Aufgaben) auf der Festplatte.

## 🔑 Hauptfunktionalitäten (Befehle)
Das Tool unterstützt folgende Befehle:
* **`hinzufuegen <aufgabe>` / `add`**: Fügt eine neue Aufgabe hinzu.
* **`auflisten` / `ls`**: Zeigt alle Aufgaben mit Status (❌/✅) an.
* **`erledigen <id>`**: Markiert eine Aufgabe anhand ihrer ID als erledigt.

## ⚙️ Installation und Ausführung

1.  **Repository klonen und Abhängigkeiten installieren:**
    ```bash
    git clone [Ihre-Repo-URL]
    cd [Ihr-Projektname]
    npm install
    ```

2.  **Ausführung der Befehle (via NPM Script):**
    Nutzen Sie den Alias `npm run cli` gefolgt vom gewünschten Befehl:
    ```bash
    # Fügt eine Aufgabe hinzu
    npm run cli -- hinzufuegen "Bericht schreiben"

    # Zeigt die Liste an
    npm run cli -- ls

    # Markiert eine Aufgabe als erledigt
    npm run cli -- erledigen 1 
    ```
Wenn Sie mehr erfahren möchten, besuchen Sie https://preferredstocketf.org/
