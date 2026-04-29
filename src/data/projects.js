export const projects = [
  {
    slug: "npynn",
    title: "NpyNN",
    desc: "Neural network library built from scratch in NumPy, with GNN extension.",
    tags: ["NumPy", "Deep Learning", "GNNs"],
    link: "https://github.com/paolopedroso/NpyNN",
    customDescription: `## Overview

Neural network library built from scratch in NumPy, including backpropagation, optimizers, and model serialization.

![Fashion-MNIST examples](./docs/fashion-mnist-examples.png)

## Highlights

- Achieved ~87% test accuracy on Fashion-MNIST (~60K examples), matching PyTorch's ~86% under identical architecture and hyperparameters.
- Added support for message-passing GNNs; achieved ~82% test accuracy on an 80K-node, 6.8M-edge graph with GCNs, matching PyTorch Geometric's ~85% under identical architecture and hyperparameters.

## Training Curves

![NpyNN Fashion-MNIST history](./plots/numpynn_fashion_mnist_history.png)

![PyTorch Fashion-MNIST history](./plots/torch_fashion_mnist_history.png)

## Confusion Matrices

<div class="img-row">
  <img src="./plots/numpynn_fashion_mnist_confusion_matrix.png" alt="NpyNN confusion matrix" />
  <img src="./plots/torch_fashion_mnist_confusion_matrix.png" alt="PyTorch confusion matrix" />
</div>

## GNN Results

![GCN synth 80K results](./plots/gcn_synth_80k_results.png)

_March 2026 to Present_
`,
  },
  {
    slug: "riscvectorcore",
    title: "RISC-V Vector Core",
    desc: "32-bit RISC-V Vector core.",
    tags: ["SystemVerilog", "RISC-V", "Verilator"],
    link: "https://github.com/paolopedroso/riscvectorcore",
    customDescription: `## Overview

32-bit RISC-V processor core written in SystemVerilog, implementing a 5-stage pipeline with data forwarding and hazard detection. Targets the RV32I base integer instruction set with vector extensions, and runs in Verilator for RTL simulation and waveform analysis.

## Features

- Five pipeline stages: Instruction Fetch, Instruction Decode, Execute, Memory, and Write Back.
- Load and store memory operations for byte, halfword, and word accesses.
- Branch and jump instructions with pipeline flushing on taken branches.
- VCD dumps for post-simulation waveform inspection.

## Toolchain

- SystemVerilog with Verilator 4.2+
- GNU Make, Python 3.6+, Bash
- riscv64-unknown-elf GCC and binutils
- WSL2 environment
`,
  },
  {
    slug: "icg-gate-sharing",
    title: "ICG Gate Sharing",
    desc: "Custom Yosys synthesis pass that shares with optional cluster of ICG cells.",
    tags: ["Yosys", "Clock Gating", "Synthesis"],
    link: "https://github.com/paolopedroso/ICG-gate-sharing",
    customDescription: `## Overview

Custom synthesis pass for Yosys that performs gate sharing among integrated clock gating (ICG) cells, with optional ICG cell clustering. The built-in \`opt_merge\` and \`opt_share\` passes cannot operate on library cells.

## Before / After

<div class="img-row">
  <img src="./docs/before_merge.png" alt="Before merging" />
  <img src="./docs/after_merge.png" alt="After merging with cluster=1" />
</div>

## Tooling

- Yosys (via the \`techmap\` command)
- TCL synthesis driver: \`synth_test.tcl\`
- Demo notebook: \`demo.ipynb\`
`,
  },
  {
    slug: "bsg-fakeram",
    title: "FakeRAM",
    desc: "Multi-port FakeRAM Generator.",
    tags: ["Python", "ASIC", "SRAM", "CACTI"],
    link: "https://github.com/VLSIDA/bsg_fakeram",
    customDescription: `## Overview

Dynamic black-box SRAM generator based on [BSG FakeRAM](https://github.com/bespoke-silicon-group/bsg_fakeram), extended to support configurable multi-port SRAM generation in Python with DRC/LVS compliance across 7nm to 130nm process nodes.

## Highlights

- Extended the generator beyond the original \`rw\`-only configs to support varied port combinations (\`1r1w\`, \`2r1w\`, \`1rw1r\`, etc.), producing \`.lef\`, \`.lib\`, and \`.v\` files ready for design integration.
- Built a CACTI integration layer with JSON parameter validation, extending compatibility beyond the original 22nm and 180nm targets.

_June 2025 to September 2025_
`,
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    desc: "This site.",
    tags: ["React", "Vite", "Tailwind"],
    link: "https://github.com/paolopedroso/paolopedroso.github.io",
    customDescription: `## Overview

This site. Minimalist, academic-style personal portfolio built with React, Vite, and Tailwind CSS.

## Stack

- React with Vite
- Tailwind CSS
- react-router, react-markdown, remark-gfm, rehype-raw
`,
  },
];
