
                                   ██████╗  █████╗ ██████╗ ████████╗███████╗███████╗██╗              
                                  ██╔════╝ ██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔════╝██║            
                                  ██║      ███████║██████╔╝   ██║   █████╗  ███████╗██║                
                                  ██║      ██╔══██║██╔══██╗   ██║   ██╔══╝  ╚════██║██║                  
                                  ╚██████╔╝██║  ██║██║  ██║   ██║   ███████╗███████║██║                   
                                   ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝╚═╝    
                                                 visual studio Code Extension

Cartana visual studio extention provides seamless support for compiling, debuging and testing smart contract diretly with in VS code. It enhances developer experiance and productivity, especially when using the github codespaces, by enabling unifide managment of front-end and back-end development with in the same repository.

# 🚀 Getting Started

  1, Install a Cartana extention
  
  2, open the VS code sidebar
  
  3, Write & test Smart contract with syntax Highlighting and debugging tools.
  
  4, Compile, Build and Deploy Dapp to a testnet/mainet in one click !

## 🛠 Prerequisites

Before installing and using the Cartana visual stideo Code Extension, ensure your system meets the following requirements:

## ✅ System Requirements

- Operating System: Windows, macOS, or Linux

- VS Code Version: v1.70 or later

- RAM: Minimum 4GB (Recommended: 8GB+ for smooth development)

- Storage: At least 2GB of free space

## 🔧 Required Dependencies

Ensure the following dependencies are installed before setting up the extension:

1️⃣ Visual Studio Code

Download and install VS Code from VS Code Download

2️⃣ Cartesi SDK

Install the Cartesi SDK by following the official guide

Or install via command line:

```sh
curl -sSL https://get.cartesi.io | sh
```

3️⃣ Docker (for Rollup deployment & containerization)

Install Docker from: Docker Official Site

Ensure Docker daemon is running:

```sh
  code docker --version
```

4️⃣ Node.js & NPM (for smart contract development)

Download and install from: Node.js Official Site

Verify installation:

```sh
  code node -v
  code npm -v
```

5️⃣ Python (for scripting & simulations)

Install Python (version 3.8+ recommended): Python Official Site

Verify installation:

```sh
  python3 --version
```

6️⃣ Rust & Cargo (for Rust-based Cartesi smart contracts)

- Install Rust via Rustup:

  ```sh
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```

- Verify installation:
  ```sh
  rustc --version
  ```

7️⃣ Git (for version control & repository management)

Install Git from: Git Official Site

Verify installation:

     git --version

# 📥Installation

1, Open VS code.

2, Go to Extentions Marketplace

3, Search for "**Cartana**".

4, Click install.

Alternative, install via command line:

```sh
code --install-extention cartesi
```

# 🚀 key Features & Usage Guide

The Cartana Visual Studio Code Extension provides a seamless development experience for building, testing, and deploying Cartesi Rollups directly inside Visual Studio Code.

1, 🔥 **Language and Code Support**
**Features**

- Syntax Highlighting for smart contract code.
- Autocomplete & Intellisense for cartesi Rollups functions.
- Code Snippets for common cartesi development platforms.

2, 🛠 **Cartesi SDK Integration**
**Features**

- Built-in Terminal Shortcuts for runing cartesi-machine, cartesi-node, etc.
- SDK Command Execution directly inside VS code.
- Auto-setup of cartesi Environment for fist-time users.

3, 🚀 **Deployment Tools**
**Features**

- one-click Deployment to Testnet/Mainnets using Docker-based workflows.
- Automated compilation & Containerization of cartesi Rollups.
- Customizable Development Settings (gas, fees, network selection).

4,🐞 **Debugging & Simulation**
**Features**

- Trasaction Simulator for testing Rollup interactions.
- Live Log Viewer for step-by-step contract execution monitoring.
- Breakpoints & Error Logging tailored for Cartesi architecture.

5,🎨 **User Experience Enhancements**
**Features**

- custom sidebar for stractured development (Create dapp, Build, Deploy and Simulate).
- inline Documentation & Tooling for quick guidance.
- Status indicators to monitor Rollup excution health & Logs.

6, ✅ **Testing Framework**
**Features**

- built-in support for Mocha & jest for smart contract testing.
- Unit Testing Integration with in VS code.
- Automation Test Excution for Dapp validation.

7, 🔴 **live Excution preview**
**Features**

- Real-time logs & matrics inside VS code.
- Performance Analytics on Rollup execution time & resource usage.
- History of transaction & Debugging sessions for easy troubleshooting.

# 🖥️ Interface Overview

The Cartesi VS code Extention provide a user-friendly interface to streamline cartesi Rollup dapp development.

1️⃣ **Working Area - Code Editor**

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

- Use predefined Cartesi snippets to quickly insert common patterns
    
- Automatically fills in default Cartesi Machine Parameters.

- Snippets available for stateful execution, transaction handling and Rollup verification.

2️⃣ **Sidebar - Navigation**

Acsses the cartesi Sidebar from the Activity Bar (View -> Cartesi). The Sidebar provides a stractured workflow for Rollup Development to organize and navigate your dapp project.

- Project Explorer - View and manage smart contract and script.

- Quick Actions
- Buttons for common tasks:
  - Intialize a cartesi dApp
  - Build & Deploy Smart Contract
  - Simulate Transactions
  - View Execution Logs

3️⃣ **Integrated development Tools - Terminal**

- Terminal with SDK Commands:

  The Extention integrate Cartesi SDK tools into the VS Code terminal:

  - Run `run` to excute smart contracts. - Compile Rollups with `build.` - Deploy with `deploy --network testnet.`
  - Debugging & Error Logging

    - Breakpoints Pause excution at key points.
    - Live Execution Logs for monitor real-time contract activity.
    - Transaction Simulator for test interactions before deploying.
