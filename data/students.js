/* =============================================================
   RESEARCH GROUP  (UCAT Lab members + alumni)

   Adding a student headshot:
     1. Drop a square photo at  assets/img/students/<slug>.jpg
        (a 400×400 or larger square works best; jpg or png).
     2. Set the `photo` field on that student's entry, e.g.
          photo:"assets/img/students/rifa.jpg"
     3. Save, commit, push.

   Photos are shown for CURRENT students only (phd, ms, bs, postdoc).
   Alumni cards intentionally stay text-only.
   If `photo` is empty or the file is missing, the card automatically
   falls back to the student's initials on a navy circle.
   ============================================================= */
window.SITE = window.SITE || {};

SITE.students = {
  phd: [
    { name:"Kazi Ramisa Rifa",    since:"2026", topic:"Neuromorphic Generative AI",                                                                             photo:"" },
    { name:"Md Farhadul Islam",   since:"2026", topic:"Physics-Fused Generative AI",                                                                            photo:"" },
    { name:"Saurabh Gupta",       since:"2026", topic:"Sustainable Electro-Photonic Computing Architectures",                                                   photo:"" },
    { name:"Bharat Bhatta",       since:"2026", topic:"Sustainable Neuromorphic Computing Architectures",                                                       photo:"" },
    { name:"Changpeng Ti",        since:"2025", topic:"Neuromorphic Computing with Artificial Spin Lattices (co-advised with Prof. Sen-Ching Cheung)",          photo:"" },
    { name:"Bipin Thapa Magar",   since:"2025", topic:"In-Memory and In-Material Neuromorphic Computing",                                                       photo:"" }
  ],
  ms: [
    { name:"Abrahim Hamdan", since:"2025", topic:"Computing with Artificial Spin Lattices (M.S. thesis, EE)", photo:"" }
  ],
  bs: [
    { name:"Keaton Poyner", since:"2025", topic:"Neuromorphic Computing", photo:"" }
  ],
  postdoc: [
    { name:"Justin Woods", when:"2021–2022", topic:"Silicon Nitride Optical Modulators (co-advised with Dr. Todd Hastings)", photo:"" }
  ],
  alumni: [
    { name:"Oluwaseun Alo",                    degree:"Ph.D., EE, 2026", topic:"Energy-efficient, scalable tensor-processing architectures with electro-photonic ICs" },
    { name:"David Pippen",                     degree:"M.S., EE, 2025", topic:"Computing with photonic phase-change memory" },
    { name:"Samrat Patel",                     degree:"M.S., EE, 2025", topic:"Lifecycle carbon footprint of DRAM-based PIM architectures" },
    { name:"Sairam Sri Vatsavai",              degree:"Ph.D., EE, 2024", topic:"AI accelerator systems using photonic ICs — now at Brookhaven National Laboratory" },
    { name:"Venkata Sai Praneeth Karempudi",   degree:"Ph.D., EE, 2023", topic:"Integrated photonic devices & circuits — now at Infinera" },
    { name:"Bobby Bose",                       degree:"M.S., CpE, 2023", topic:"Photonic reduction networks for spatial GEMM accelerators — now at Broadcom" },
    { name:"Supreeth Mysore Shivanandamurthy", degree:"Ph.D., EE, 2023", topic:"In-memory stochastic computing (co-advised with Prof. Sayed Ahmad Salehi)" },
    { name:"Chao-Hsuan Huang",                 degree:"M.S., EE, 2021", topic:"Monolithic-3D DRAM and phase-change memory — now at Infineon" }
  ]
};

// Prospective-students call to action (shown at the bottom of the Group page)
SITE.prospective = "I am always looking for talented, self-motivated undergraduate, graduate, and postdoctoral researchers to work on extreme-scale optical computing, in-memory computing, stochastic computing, integrated photonics, and neuromorphic computing with emerging materials and devices. Helpful backgrounds include C/C++/Python/SystemC/VHDL/Verilog, deep learning, computer-architecture design, and nanofabrication (CMOS, silicon and/or III-V photonics). If interested, email me your CV and the research topics that excite you.";
