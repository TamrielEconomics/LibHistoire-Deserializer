export enum VR {
    NOVR = 50,
    VR1 = 51,
    VR2 = 52,
    VR3 = 53,
    VR4 = 54,
    VR5 = 55,
    VR6 = 56,
    VR7 = 57,
    VR8 = 58,
    VR9 = 59,
    VR10 = 60,
    VR11 = 61,
    VR12 = 62,
    VR13 = 63,
    VR14 = 64,
    VR15 = 65,
    VR16 = 66,
    VR17 = 67,
    VR18 = 68,
}

export enum Quality {
    TRASH = "Trash",
    NORMAL = "Normal",
    FINE = "Fine",
    SUPERIOR = "Superior",
    EPIC = "Epic",
    LEGENDARY = "Legendary",
}

export type TSubType = { level: VR; quality: Quality };
export type TSubTypeMap = { [key: number]: TSubType };

export const SubTypeMap: TSubTypeMap = {
    [0]: { level: VR.NOVR, quality: Quality.NORMAL },
    [1]: { level: VR.NOVR, quality: Quality.TRASH },
    [2]: { level: VR.NOVR, quality: Quality.NORMAL },
    [3]: { level: VR.NOVR, quality: Quality.FINE },
    [4]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [5]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [6]: { level: VR.NOVR, quality: Quality.LEGENDARY },
    [7]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [8]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [9]: { level: VR.NOVR, quality: Quality.FINE },
    [10]: { level: VR.NOVR, quality: Quality.FINE },
    [11]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [12]: { level: VR.NOVR, quality: Quality.LEGENDARY },
    [13]: { level: VR.NOVR, quality: Quality.LEGENDARY },
    [14]: { level: VR.NOVR, quality: Quality.LEGENDARY },
    [15]: { level: VR.NOVR, quality: Quality.LEGENDARY },
    [16]: { level: VR.NOVR, quality: Quality.LEGENDARY },
    [17]: { level: VR.NOVR, quality: Quality.LEGENDARY },
    [18]: { level: VR.NOVR, quality: Quality.FINE },
    [19]: { level: VR.NOVR, quality: Quality.FINE },
    [20]: { level: VR.NOVR, quality: Quality.NORMAL },
    [21]: { level: VR.NOVR, quality: Quality.FINE },
    [22]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [23]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [24]: { level: VR.NOVR, quality: Quality.LEGENDARY },
    [25]: { level: VR.NOVR, quality: Quality.NORMAL },
    [26]: { level: VR.NOVR, quality: Quality.FINE },
    [27]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [28]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [29]: { level: VR.NOVR, quality: Quality.LEGENDARY },
    [30]: { level: VR.NOVR, quality: Quality.NORMAL },
    [31]: { level: VR.NOVR, quality: Quality.FINE },
    [32]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [33]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [34]: { level: VR.NOVR, quality: Quality.LEGENDARY },
    [35]: { level: VR.NOVR, quality: Quality.NORMAL },
    [36]: { level: VR.NOVR, quality: Quality.NORMAL },
    [37]: { level: VR.NOVR, quality: Quality.NORMAL },
    [38]: { level: VR.NOVR, quality: Quality.NORMAL },
    [39]: { level: VR.VR1, quality: Quality.FINE },
    [40]: { level: VR.VR2, quality: Quality.FINE },
    [41]: { level: VR.VR3, quality: Quality.FINE },
    [42]: { level: VR.VR4, quality: Quality.FINE },
    [43]: { level: VR.VR5, quality: Quality.FINE },
    [44]: { level: VR.VR6, quality: Quality.FINE },
    [45]: { level: VR.VR7, quality: Quality.FINE },
    [46]: { level: VR.VR8, quality: Quality.FINE },
    [47]: { level: VR.VR9, quality: Quality.FINE },
    [48]: { level: VR.VR10, quality: Quality.FINE },
    [49]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [50]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [51]: { level: VR.VR1, quality: Quality.FINE },
    [52]: { level: VR.VR2, quality: Quality.FINE },
    [53]: { level: VR.VR3, quality: Quality.FINE },
    [54]: { level: VR.VR4, quality: Quality.FINE },
    [55]: { level: VR.VR5, quality: Quality.FINE },
    [56]: { level: VR.VR6, quality: Quality.FINE },
    [57]: { level: VR.VR7, quality: Quality.FINE },
    [58]: { level: VR.VR8, quality: Quality.FINE },
    [59]: { level: VR.VR9, quality: Quality.FINE },
    [60]: { level: VR.VR10, quality: Quality.FINE },
    [61]: { level: VR.VR1, quality: Quality.SUPERIOR },
    [62]: { level: VR.VR2, quality: Quality.SUPERIOR },
    [63]: { level: VR.VR3, quality: Quality.SUPERIOR },
    [64]: { level: VR.VR4, quality: Quality.SUPERIOR },
    [65]: { level: VR.VR5, quality: Quality.SUPERIOR },
    [66]: { level: VR.VR6, quality: Quality.SUPERIOR },
    [67]: { level: VR.VR7, quality: Quality.SUPERIOR },
    [68]: { level: VR.VR8, quality: Quality.SUPERIOR },
    [69]: { level: VR.VR9, quality: Quality.SUPERIOR },
    [70]: { level: VR.VR10, quality: Quality.SUPERIOR },
    [71]: { level: VR.VR1, quality: Quality.SUPERIOR },
    [72]: { level: VR.VR2, quality: Quality.SUPERIOR },
    [73]: { level: VR.VR3, quality: Quality.SUPERIOR },
    [74]: { level: VR.VR4, quality: Quality.SUPERIOR },
    [75]: { level: VR.VR5, quality: Quality.SUPERIOR },
    [76]: { level: VR.VR6, quality: Quality.SUPERIOR },
    [77]: { level: VR.VR7, quality: Quality.SUPERIOR },
    [78]: { level: VR.VR8, quality: Quality.SUPERIOR },
    [79]: { level: VR.VR9, quality: Quality.SUPERIOR },
    [80]: { level: VR.VR10, quality: Quality.SUPERIOR },
    [81]: { level: VR.VR1, quality: Quality.SUPERIOR },
    [82]: { level: VR.VR2, quality: Quality.SUPERIOR },
    [83]: { level: VR.VR3, quality: Quality.SUPERIOR },
    [84]: { level: VR.VR4, quality: Quality.SUPERIOR },
    [85]: { level: VR.VR5, quality: Quality.SUPERIOR },
    [86]: { level: VR.VR6, quality: Quality.SUPERIOR },
    [87]: { level: VR.VR7, quality: Quality.SUPERIOR },
    [88]: { level: VR.VR8, quality: Quality.SUPERIOR },
    [89]: { level: VR.VR9, quality: Quality.SUPERIOR },
    [90]: { level: VR.VR10, quality: Quality.SUPERIOR },
    [91]: { level: VR.VR1, quality: Quality.SUPERIOR },
    [92]: { level: VR.VR2, quality: Quality.SUPERIOR },
    [93]: { level: VR.VR3, quality: Quality.SUPERIOR },
    [94]: { level: VR.VR4, quality: Quality.SUPERIOR },
    [95]: { level: VR.VR5, quality: Quality.SUPERIOR },
    [96]: { level: VR.VR6, quality: Quality.SUPERIOR },
    [97]: { level: VR.VR7, quality: Quality.SUPERIOR },
    [98]: { level: VR.VR8, quality: Quality.SUPERIOR },
    [99]: { level: VR.VR9, quality: Quality.SUPERIOR },
    [100]: { level: VR.VR10, quality: Quality.SUPERIOR },
    [101]: { level: VR.VR1, quality: Quality.LEGENDARY },
    [102]: { level: VR.VR2, quality: Quality.LEGENDARY },
    [103]: { level: VR.VR3, quality: Quality.LEGENDARY },
    [104]: { level: VR.VR4, quality: Quality.LEGENDARY },
    [105]: { level: VR.VR5, quality: Quality.LEGENDARY },
    [106]: { level: VR.VR6, quality: Quality.LEGENDARY },
    [107]: { level: VR.VR7, quality: Quality.LEGENDARY },
    [108]: { level: VR.VR8, quality: Quality.LEGENDARY },
    [109]: { level: VR.VR9, quality: Quality.LEGENDARY },
    [110]: { level: VR.VR10, quality: Quality.LEGENDARY },
    [111]: { level: VR.VR1, quality: Quality.NORMAL },
    [112]: { level: VR.VR2, quality: Quality.NORMAL },
    [113]: { level: VR.VR3, quality: Quality.NORMAL },
    [114]: { level: VR.VR4, quality: Quality.NORMAL },
    [115]: { level: VR.VR5, quality: Quality.NORMAL },
    [116]: { level: VR.VR6, quality: Quality.NORMAL },
    [117]: { level: VR.VR7, quality: Quality.NORMAL },
    [118]: { level: VR.VR8, quality: Quality.NORMAL },
    [119]: { level: VR.VR9, quality: Quality.NORMAL },
    [120]: { level: VR.VR10, quality: Quality.NORMAL },
    [121]: { level: VR.NOVR, quality: Quality.FINE },
    [122]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [123]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [124]: { level: VR.NOVR, quality: Quality.LEGENDARY },
    [125]: { level: VR.VR1, quality: Quality.NORMAL },
    [126]: { level: VR.VR2, quality: Quality.NORMAL },
    [127]: { level: VR.VR3, quality: Quality.NORMAL },
    [128]: { level: VR.VR4, quality: Quality.NORMAL },
    [129]: { level: VR.VR5, quality: Quality.NORMAL },
    [130]: { level: VR.VR6, quality: Quality.NORMAL },
    [131]: { level: VR.VR7, quality: Quality.NORMAL },
    [132]: { level: VR.VR8, quality: Quality.NORMAL },
    [133]: { level: VR.VR9, quality: Quality.NORMAL },
    [134]: { level: VR.VR10, quality: Quality.NORMAL },
    [135]: { level: VR.VR1, quality: Quality.FINE },
    [136]: { level: VR.VR2, quality: Quality.FINE },
    [137]: { level: VR.VR3, quality: Quality.FINE },
    [138]: { level: VR.VR4, quality: Quality.FINE },
    [139]: { level: VR.VR5, quality: Quality.FINE },
    [140]: { level: VR.VR6, quality: Quality.FINE },
    [141]: { level: VR.VR7, quality: Quality.FINE },
    [142]: { level: VR.VR8, quality: Quality.FINE },
    [143]: { level: VR.VR9, quality: Quality.FINE },
    [144]: { level: VR.VR10, quality: Quality.FINE },
    [145]: { level: VR.VR1, quality: Quality.SUPERIOR },
    [146]: { level: VR.VR2, quality: Quality.SUPERIOR },
    [147]: { level: VR.VR3, quality: Quality.SUPERIOR },
    [148]: { level: VR.VR4, quality: Quality.SUPERIOR },
    [149]: { level: VR.VR5, quality: Quality.SUPERIOR },
    [150]: { level: VR.VR6, quality: Quality.SUPERIOR },
    [151]: { level: VR.VR7, quality: Quality.SUPERIOR },
    [152]: { level: VR.VR8, quality: Quality.SUPERIOR },
    [153]: { level: VR.VR9, quality: Quality.SUPERIOR },
    [154]: { level: VR.VR10, quality: Quality.SUPERIOR },
    [155]: { level: VR.VR1, quality: Quality.SUPERIOR },
    [156]: { level: VR.VR2, quality: Quality.SUPERIOR },
    [157]: { level: VR.VR3, quality: Quality.SUPERIOR },
    [158]: { level: VR.VR4, quality: Quality.SUPERIOR },
    [159]: { level: VR.VR5, quality: Quality.SUPERIOR },
    [160]: { level: VR.VR6, quality: Quality.SUPERIOR },
    [161]: { level: VR.VR7, quality: Quality.SUPERIOR },
    [162]: { level: VR.VR8, quality: Quality.SUPERIOR },
    [163]: { level: VR.VR9, quality: Quality.SUPERIOR },
    [164]: { level: VR.VR10, quality: Quality.SUPERIOR },
    [165]: { level: VR.VR1, quality: Quality.LEGENDARY },
    [166]: { level: VR.VR2, quality: Quality.LEGENDARY },
    [167]: { level: VR.VR3, quality: Quality.LEGENDARY },
    [168]: { level: VR.VR4, quality: Quality.LEGENDARY },
    [169]: { level: VR.VR5, quality: Quality.LEGENDARY },
    [170]: { level: VR.VR6, quality: Quality.LEGENDARY },
    [171]: { level: VR.VR7, quality: Quality.LEGENDARY },
    [172]: { level: VR.VR8, quality: Quality.LEGENDARY },
    [173]: { level: VR.VR9, quality: Quality.LEGENDARY },
    [174]: { level: VR.VR10, quality: Quality.LEGENDARY },
    [175]: { level: VR.NOVR, quality: Quality.NORMAL },
    [176]: { level: VR.NOVR, quality: Quality.NORMAL },
    [177]: { level: VR.NOVR, quality: Quality.TRASH },
    [178]: { level: VR.VR1, quality: Quality.NORMAL },
    [179]: { level: VR.VR2, quality: Quality.NORMAL },
    [180]: { level: VR.VR3, quality: Quality.NORMAL },
    [181]: { level: VR.VR4, quality: Quality.NORMAL },
    [182]: { level: VR.VR5, quality: Quality.NORMAL },
    [183]: { level: VR.VR6, quality: Quality.NORMAL },
    [184]: { level: VR.VR7, quality: Quality.NORMAL },
    [185]: { level: VR.VR8, quality: Quality.NORMAL },
    [186]: { level: VR.VR9, quality: Quality.NORMAL },
    [187]: { level: VR.VR10, quality: Quality.NORMAL },
    [188]: { level: VR.VR1, quality: Quality.FINE },
    [189]: { level: VR.VR2, quality: Quality.FINE },
    [190]: { level: VR.VR3, quality: Quality.FINE },
    [191]: { level: VR.VR4, quality: Quality.FINE },
    [192]: { level: VR.VR5, quality: Quality.FINE },
    [193]: { level: VR.VR6, quality: Quality.FINE },
    [194]: { level: VR.VR7, quality: Quality.FINE },
    [195]: { level: VR.VR8, quality: Quality.FINE },
    [196]: { level: VR.VR9, quality: Quality.FINE },
    [197]: { level: VR.VR10, quality: Quality.FINE },
    [198]: { level: VR.VR1, quality: Quality.SUPERIOR },
    [199]: { level: VR.VR2, quality: Quality.SUPERIOR },
    [200]: { level: VR.VR3, quality: Quality.SUPERIOR },
    [201]: { level: VR.VR4, quality: Quality.SUPERIOR },
    [202]: { level: VR.VR5, quality: Quality.SUPERIOR },
    [203]: { level: VR.VR6, quality: Quality.SUPERIOR },
    [204]: { level: VR.VR7, quality: Quality.SUPERIOR },
    [205]: { level: VR.VR8, quality: Quality.SUPERIOR },
    [206]: { level: VR.VR9, quality: Quality.SUPERIOR },
    [207]: { level: VR.VR10, quality: Quality.SUPERIOR },
    [208]: { level: VR.VR1, quality: Quality.SUPERIOR },
    [209]: { level: VR.VR2, quality: Quality.SUPERIOR },
    [210]: { level: VR.VR3, quality: Quality.SUPERIOR },
    [211]: { level: VR.VR4, quality: Quality.SUPERIOR },
    [212]: { level: VR.VR5, quality: Quality.SUPERIOR },
    [213]: { level: VR.VR6, quality: Quality.SUPERIOR },
    [214]: { level: VR.VR7, quality: Quality.SUPERIOR },
    [215]: { level: VR.VR8, quality: Quality.SUPERIOR },
    [216]: { level: VR.VR9, quality: Quality.SUPERIOR },
    [217]: { level: VR.VR10, quality: Quality.SUPERIOR },
    [218]: { level: VR.VR1, quality: Quality.LEGENDARY },
    [219]: { level: VR.VR2, quality: Quality.LEGENDARY },
    [220]: { level: VR.VR3, quality: Quality.LEGENDARY },
    [221]: { level: VR.VR4, quality: Quality.LEGENDARY },
    [222]: { level: VR.VR5, quality: Quality.LEGENDARY },
    [223]: { level: VR.VR6, quality: Quality.LEGENDARY },
    [224]: { level: VR.VR7, quality: Quality.LEGENDARY },
    [225]: { level: VR.VR8, quality: Quality.LEGENDARY },
    [226]: { level: VR.VR9, quality: Quality.LEGENDARY },
    [227]: { level: VR.VR10, quality: Quality.LEGENDARY },
    [228]: { level: VR.VR11, quality: Quality.FINE },
    [229]: { level: VR.VR11, quality: Quality.FINE },
    [230]: { level: VR.VR11, quality: Quality.SUPERIOR },
    [231]: { level: VR.VR11, quality: Quality.SUPERIOR },
    [232]: { level: VR.VR11, quality: Quality.SUPERIOR },
    [233]: { level: VR.VR11, quality: Quality.SUPERIOR },
    [234]: { level: VR.VR11, quality: Quality.LEGENDARY },
    [235]: { level: VR.VR11, quality: Quality.NORMAL },
    [236]: { level: VR.VR11, quality: Quality.NORMAL },
    [237]: { level: VR.VR11, quality: Quality.FINE },
    [238]: { level: VR.VR11, quality: Quality.SUPERIOR },
    [239]: { level: VR.VR11, quality: Quality.SUPERIOR },
    [240]: { level: VR.VR11, quality: Quality.LEGENDARY },
    [241]: { level: VR.VR11, quality: Quality.NORMAL },
    [242]: { level: VR.VR11, quality: Quality.FINE },
    [243]: { level: VR.VR11, quality: Quality.SUPERIOR },
    [244]: { level: VR.VR11, quality: Quality.SUPERIOR },
    [245]: { level: VR.VR11, quality: Quality.LEGENDARY },
    [246]: { level: VR.VR12, quality: Quality.FINE },
    [247]: { level: VR.VR12, quality: Quality.FINE },
    [248]: { level: VR.VR12, quality: Quality.SUPERIOR },
    [249]: { level: VR.VR12, quality: Quality.SUPERIOR },
    [250]: { level: VR.VR12, quality: Quality.SUPERIOR },
    [251]: { level: VR.VR12, quality: Quality.SUPERIOR },
    [252]: { level: VR.VR12, quality: Quality.LEGENDARY },
    [253]: { level: VR.VR12, quality: Quality.NORMAL },
    [254]: { level: VR.VR12, quality: Quality.NORMAL },
    [255]: { level: VR.VR12, quality: Quality.FINE },
    [256]: { level: VR.VR12, quality: Quality.SUPERIOR },
    [257]: { level: VR.VR12, quality: Quality.SUPERIOR },
    [258]: { level: VR.VR12, quality: Quality.LEGENDARY },
    [259]: { level: VR.VR12, quality: Quality.NORMAL },
    [260]: { level: VR.VR12, quality: Quality.FINE },
    [261]: { level: VR.VR12, quality: Quality.SUPERIOR },
    [262]: { level: VR.VR12, quality: Quality.SUPERIOR },
    [263]: { level: VR.VR12, quality: Quality.LEGENDARY },
    [264]: { level: VR.VR13, quality: Quality.FINE },
    [265]: { level: VR.VR13, quality: Quality.FINE },
    [266]: { level: VR.VR13, quality: Quality.SUPERIOR },
    [267]: { level: VR.VR13, quality: Quality.SUPERIOR },
    [268]: { level: VR.VR13, quality: Quality.SUPERIOR },
    [269]: { level: VR.VR13, quality: Quality.SUPERIOR },
    [270]: { level: VR.VR13, quality: Quality.LEGENDARY },
    [271]: { level: VR.VR13, quality: Quality.NORMAL },
    [272]: { level: VR.VR13, quality: Quality.NORMAL },
    [273]: { level: VR.VR13, quality: Quality.FINE },
    [274]: { level: VR.VR13, quality: Quality.SUPERIOR },
    [275]: { level: VR.VR13, quality: Quality.SUPERIOR },
    [276]: { level: VR.VR13, quality: Quality.LEGENDARY },
    [277]: { level: VR.VR13, quality: Quality.NORMAL },
    [278]: { level: VR.VR13, quality: Quality.FINE },
    [279]: { level: VR.VR13, quality: Quality.SUPERIOR },
    [280]: { level: VR.VR13, quality: Quality.SUPERIOR },
    [281]: { level: VR.VR13, quality: Quality.LEGENDARY },
    [282]: { level: VR.VR14, quality: Quality.FINE },
    [283]: { level: VR.VR14, quality: Quality.FINE },
    [284]: { level: VR.VR14, quality: Quality.SUPERIOR },
    [285]: { level: VR.VR14, quality: Quality.SUPERIOR },
    [286]: { level: VR.VR14, quality: Quality.SUPERIOR },
    [287]: { level: VR.VR14, quality: Quality.SUPERIOR },
    [288]: { level: VR.VR14, quality: Quality.LEGENDARY },
    [289]: { level: VR.VR14, quality: Quality.NORMAL },
    [290]: { level: VR.VR14, quality: Quality.NORMAL },
    [291]: { level: VR.VR14, quality: Quality.FINE },
    [292]: { level: VR.VR14, quality: Quality.SUPERIOR },
    [293]: { level: VR.VR14, quality: Quality.SUPERIOR },
    [294]: { level: VR.VR14, quality: Quality.LEGENDARY },
    [295]: { level: VR.VR14, quality: Quality.NORMAL },
    [296]: { level: VR.VR14, quality: Quality.FINE },
    [297]: { level: VR.VR14, quality: Quality.SUPERIOR },
    [298]: { level: VR.VR14, quality: Quality.SUPERIOR },
    [299]: { level: VR.VR14, quality: Quality.LEGENDARY },
    [300]: { level: VR.VR15, quality: Quality.FINE },
    [301]: { level: VR.VR15, quality: Quality.FINE },
    [302]: { level: VR.VR15, quality: Quality.SUPERIOR },
    [303]: { level: VR.VR15, quality: Quality.SUPERIOR },
    [304]: { level: VR.VR15, quality: Quality.SUPERIOR },
    [305]: { level: VR.VR15, quality: Quality.SUPERIOR },
    [306]: { level: VR.VR15, quality: Quality.LEGENDARY },
    [307]: { level: VR.VR15, quality: Quality.NORMAL },
    [308]: { level: VR.VR15, quality: Quality.NORMAL },
    [309]: { level: VR.VR15, quality: Quality.FINE },
    [310]: { level: VR.VR15, quality: Quality.SUPERIOR },
    [311]: { level: VR.VR15, quality: Quality.SUPERIOR },
    [312]: { level: VR.VR15, quality: Quality.LEGENDARY },
    [313]: { level: VR.VR15, quality: Quality.NORMAL },
    [314]: { level: VR.VR15, quality: Quality.FINE },
    [315]: { level: VR.VR15, quality: Quality.SUPERIOR },
    [316]: { level: VR.VR15, quality: Quality.SUPERIOR },
    [317]: { level: VR.VR15, quality: Quality.LEGENDARY },
    [318]: { level: VR.NOVR, quality: Quality.TRASH },
    [319]: { level: VR.NOVR, quality: Quality.NORMAL },
    [320]: { level: VR.NOVR, quality: Quality.FINE },
    [321]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [322]: { level: VR.NOVR, quality: Quality.SUPERIOR },
    [323]: { level: VR.NOVR, quality: Quality.LEGENDARY },
    [324]: { level: VR.VR1, quality: Quality.NORMAL },
    [325]: { level: VR.VR2, quality: Quality.NORMAL },
    [326]: { level: VR.VR3, quality: Quality.NORMAL },
    [327]: { level: VR.VR4, quality: Quality.NORMAL },
    [328]: { level: VR.VR5, quality: Quality.NORMAL },
    [329]: { level: VR.VR6, quality: Quality.NORMAL },
    [330]: { level: VR.VR7, quality: Quality.NORMAL },
    [331]: { level: VR.VR8, quality: Quality.NORMAL },
    [332]: { level: VR.VR9, quality: Quality.NORMAL },
    [333]: { level: VR.VR10, quality: Quality.NORMAL },
    [334]: { level: VR.VR11, quality: Quality.NORMAL },
    [335]: { level: VR.VR12, quality: Quality.NORMAL },
    [336]: { level: VR.VR13, quality: Quality.NORMAL },
    [337]: { level: VR.VR14, quality: Quality.NORMAL },
    [338]: { level: VR.VR15, quality: Quality.NORMAL },
    [339]: { level: VR.VR1, quality: Quality.FINE },
    [340]: { level: VR.VR2, quality: Quality.FINE },
    [341]: { level: VR.VR3, quality: Quality.FINE },
    [342]: { level: VR.VR4, quality: Quality.FINE },
    [343]: { level: VR.VR5, quality: Quality.FINE },
    [344]: { level: VR.VR6, quality: Quality.FINE },
    [345]: { level: VR.VR7, quality: Quality.FINE },
    [346]: { level: VR.VR8, quality: Quality.FINE },
    [347]: { level: VR.VR9, quality: Quality.FINE },
    [348]: { level: VR.VR10, quality: Quality.FINE },
    [349]: { level: VR.VR11, quality: Quality.FINE },
    [350]: { level: VR.VR12, quality: Quality.FINE },
    [351]: { level: VR.VR13, quality: Quality.FINE },
    [352]: { level: VR.VR14, quality: Quality.FINE },
    [353]: { level: VR.VR15, quality: Quality.FINE },
    [354]: { level: VR.VR12, quality: Quality.SUPERIOR },
    [355]: { level: VR.VR12, quality: Quality.LEGENDARY },
    [356]: { level: VR.NOVR, quality: Quality.NORMAL },
    [357]: { level: VR.NOVR, quality: Quality.NORMAL },
    [358]: { level: VR.VR16, quality: Quality.FINE },
    [359]: { level: VR.VR16, quality: Quality.FINE },
    [360]: { level: VR.VR16, quality: Quality.SUPERIOR },
    [361]: { level: VR.VR16, quality: Quality.SUPERIOR },
    [362]: { level: VR.VR16, quality: Quality.SUPERIOR },
    [363]: { level: VR.VR16, quality: Quality.SUPERIOR },
    [364]: { level: VR.VR16, quality: Quality.LEGENDARY },
    [365]: { level: VR.VR16, quality: Quality.NORMAL },
    [366]: { level: VR.VR16, quality: Quality.NORMAL },
    [367]: { level: VR.VR16, quality: Quality.FINE },
    [368]: { level: VR.VR16, quality: Quality.SUPERIOR },
    [369]: { level: VR.VR16, quality: Quality.SUPERIOR },
    [370]: { level: VR.VR16, quality: Quality.LEGENDARY },
    [371]: { level: VR.VR16, quality: Quality.NORMAL },
    [372]: { level: VR.VR16, quality: Quality.FINE },
    [373]: { level: VR.VR16, quality: Quality.SUPERIOR },
    [374]: { level: VR.VR16, quality: Quality.SUPERIOR },
    [375]: { level: VR.VR16, quality: Quality.LEGENDARY },
    [376]: { level: VR.VR16, quality: Quality.NORMAL },
    [377]: { level: VR.VR16, quality: Quality.FINE },
    [378]: { level: VR.NOVR, quality: Quality.NORMAL },
    [379]: { level: VR.NOVR, quality: Quality.NORMAL },
    [380]: { level: VR.VR17, quality: Quality.FINE },
    [381]: { level: VR.VR17, quality: Quality.FINE },
    [382]: { level: VR.VR17, quality: Quality.SUPERIOR },
    [383]: { level: VR.VR17, quality: Quality.SUPERIOR },
    [384]: { level: VR.VR17, quality: Quality.SUPERIOR },
    [385]: { level: VR.VR17, quality: Quality.SUPERIOR },
    [386]: { level: VR.VR17, quality: Quality.LEGENDARY },
    [387]: { level: VR.VR17, quality: Quality.NORMAL },
    [388]: { level: VR.VR17, quality: Quality.NORMAL },
    [389]: { level: VR.VR17, quality: Quality.FINE },
    [390]: { level: VR.VR17, quality: Quality.SUPERIOR },
    [391]: { level: VR.VR17, quality: Quality.SUPERIOR },
    [392]: { level: VR.VR17, quality: Quality.LEGENDARY },
    [393]: { level: VR.VR17, quality: Quality.NORMAL },
    [394]: { level: VR.VR17, quality: Quality.FINE },
    [395]: { level: VR.VR17, quality: Quality.SUPERIOR },
    [396]: { level: VR.VR17, quality: Quality.SUPERIOR },
    [397]: { level: VR.VR17, quality: Quality.LEGENDARY },
    [398]: { level: VR.VR17, quality: Quality.NORMAL },
    [399]: { level: VR.VR17, quality: Quality.FINE },
    [400]: { level: VR.VR18, quality: Quality.FINE },
};

export enum LinkType {
    ITEM,
    WRIT,
    POTION,
}

export type Level = { level: number; vr: VR };
