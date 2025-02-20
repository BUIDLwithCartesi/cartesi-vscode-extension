# Cartesi Extention

Cartesi extention provides seamless support for compiling, debuging and testing Cartesi smart contract diretly with in VS code. It enhances developer experiance and productivity, especially when using the github codespaces, by enabling unifide managment of front-end and back-end development with in the same repository.

# key Features

This Extention will enhance cartesi Rollup Dapp development by integrating syntax support, debuging tools, development automation, and real-time execution logs in to the VS-Code.

1, **Language and Code Support**

- Syntax Highlighting for smart contract code.
- Autocomplete & Intellisense for cartesi Rollups functions.
- Code Snippets for common cartesi development platforms.

2, **Cartesi SDK Integration**

- Built-in Terminal Shortcuts for runing cartesi-machine, cartesi-node, etc.
- SDK Command Execution directly inside VS code.
- Auto-setup of cartesi Environment for fist-time users.

3, **Deployment Tools**

- one-click Deployment to Testnet/Mainnets using Docker-based workflows.
- Automated compilation & Containerization of cartesi Rollups.
- Customizable Development Settings (gas, fees, network selection).

4, **Debugging & Simulation**

- Trasaction Simulator for testing Rollup interactions.
- Live Log Viewer for step-by-step contract execution monitoring.
- Breakpoints & Error Logging tailored for Cartesi architecture.

5, **User Experience Enhancements**

- custom sidebar for stractured development (Create Machine, Deploy, Simulate).
- inline Documentation & Tooling for quick guidance.
- Status indicators to monitor Rollup excution health & Logs.

6, **Testing Framework**

- built-in support for Mocha & jest for smart contract testing.
- Unit Testing Integration with in VS code.
- Automation Test Excution for Dapp validation.

7, **live Excution preview**

- Real-time logs & matrics inside VS code.
- Performance Analytics on Rollup execution time & resource usage.
- History of transaction & Debugging sessions for easy troubleshooting.

# Installation

1, Open VS code.

2, Go to Extentions Marketplace (++)

3, Search for "Cartesi Extension".

4, Click install.

Alternative, install via command line:

    code --install-extention cartesi

# Getting Started

1, Install a cartesi dapp

2, open the VS code sidebar ( View --> Cartesi )

3, Write & test Smart contract with syntax Highlighting and debugging tools.

4, Deploy Dapp to a testnet/mainet in one click !

# Interface Overview

The Cartesi VS code Extention provide a user-friendly interface to streamline cartesi Rollup dapp development.

1, **Working Area - Code Editor**

The main area in the vs code Editor, Where you can write smart contract and dApp configerations.
the extention enhance the experience with:

- Syntax Highlighting:

  - provides colour coded syntax for Cartesi smart contract and Rollup sctipt.
  - Support Python, Java script, Rust and other programing languages
  - Highlights Cartesi-Specfic Keywords, functions and contract stractures.

- Autocomplete & Intellisense

  - smart suggestions for Cartesi Rollup APIs and functions.
  - Hover tooltips provide inline documentation for cartesi commands.
  - Bracket matching & auto-closing to avoid syntax errors.

- Code Snippets for Faster Development

Use predefined Cartesi snippets to quickly insert common patterns

Example Snippet - Initializing a cartesi Machine.

Type **cartesi-machine** and select the snippet to insert:

    cartesi_machine = cartesimachine {
        memory_size = 1024 + 1024 + 512, --512MB RAM
        bootargs = "console=tty50 root=/dev/vda1",
        rom = "/opt/cartesi/rom.bin"
    }

- Automatically fills in default Cartesi Machine Parameters.

- Snippets available for stateful execution, transaction handling and Rollup verification.

2, **Sidebar: Navigation**

Acsses the cartesi Sidebar from the Activity Bar (View -> Cartesi). The Sidebar provides a stractured workflow for Rollup Development to organize and navigate your dapp project.

- Project Explorer - View and manage smart contract and script.

- Quick Actions
- Buttons for common tasks:
  - Intialize a cartesi dApp
  - Build & Deploy Smart Contract
  - Simulate Transactions
  - View Execution Logs

3, **Integrated development Tools**

- Terminal with SDK Commands:

  The Extention integrate Cartesi SDK tools into the VS Code terminal:

  - Run `cartesi-machine run` to excute smart contracts. - Compile Rollups with `Cartesi-rollups build.` - Deploy with `cartesi-rollups deploy --network testnet.`
  - Debugging & Error Logging

    - Breakpoints Pause excution at key points.
    - Live Execution Logs for monitor real-time contract activity.
    - Transaction Simulator for test interactions before deploying.
