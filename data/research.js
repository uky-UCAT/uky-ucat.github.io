/* =============================================================
   RESEARCH AREAS
   Each area: title, blurb, and selected publication IDs (link to
   the Publications page). Edit freely.
   ============================================================= */
window.SITE = window.SITE || {};

SITE.research = [
  {
    id: "optical",
    title: "Extreme-Scale Optical Computing",
    blurb: "Neuromorphic and general-purpose optical hardware accelerators, and highly scalable photonic integrated circuits (PICs) that push performance beyond package- and petascale limits.",
    pubs: ["J13","C46","C40","C35","C31","C30","C28","C24","J11"]
  },
  {
    id: "inmemory",
    title: "In-Memory Computing",
    blurb: "In-DRAM and in-memory accelerators for deep learning, including analog/stochastic charge-domain compute inside the memory array.",
    pubs: ["J18","J17","J15","C42","C33","C26","C25"]
  },
  {
    id: "neuromorphic",
    title: "Neuromorphic Computing with Emerging Materials",
    blurb: "Parameter-efficient reservoir computing and physics-fused generative AI, including reservoirs realized with artificial spin lattices and photonic devices for edge deployment.",
    pubs: ["C58","C57","C49","C43","C24"]
  },
  {
    id: "stochastic",
    title: "Bit-Parallel Stochastic Computing",
    blurb: "Highly scalable, error-resilient stochastic circuits with precision-independent latency for energy-efficient inference.",
    pubs: ["J17","J15","C34","C26","C18"]
  },
  {
    id: "security",
    title: "Security in Manycore Architectures",
    blurb: "Hardware security for photonic networks-on-chip — exploiting process variations for encryption and defending against snooping and hardware Trojans.",
    pubs: ["C51","C44","C15","C13","J7"]
  },
  {
    id: "devices",
    title: "Optoelectronic / Photonic Devices & Sensors",
    blurb: "High-speed electro-photonic modulators and logic (incl. silicon-nitride platforms) and polymer-based photonic biosensors.",
    pubs: ["C52","C38","C37","C32","C29","J1"]
  },
  {
    id: "adaptive",
    title: "Self-Adaptive Photonic Interconnects",
    blurb: "Cognitive, loss- and aging-aware reconfiguration of photonic links for reliability and energy efficiency, plus crosstalk-noise analysis and mitigation.",
    pubs: ["C22","C21","C16","J12","J9","J8","J4"]
  },
  {
    id: "memory",
    title: "Emerging Memory Technologies & Architectures",
    blurb: "Fine-grained TSV-based 3D-folded DRAM, monolithic-3D integrated memory, and latency/lifetime optimizations for nonvolatile memories.",
    pubs: ["C23","C17","C10","C3","C1","J5","J3","J2"]
  }
];
