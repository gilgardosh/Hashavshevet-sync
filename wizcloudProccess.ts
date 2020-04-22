import { getMesh, findAndParseConfig } from "@graphql-mesh/runtime";

async function getHashData() {
  const meshConfig = await findAndParseConfig();
  const { execute } = await getMesh(meshConfig);
  const { data, errors } = await execute(
    `
    mutation getWizcloudData {
      exportDataRecords(
        authorization: "8b52a2acec2377fb1aff15c67b1c82ff38d17c75fed75c660bd170373ad6e1b0d0912b488b57f5440ff720abb4bbc741e90454aeb21a17e9ba7830cf1e9414168713ec2fb7bb4755dfeaa320fce3436fdec877da818a594c60950c44f05c0b9d8bbdfbffcc91587bf1de85adc2c58e3d"
        exportDataApiExportDataInput: {
          datafile: "0c61e292d66a71326e011b089534ee146ef5c300a4bd922fa913e81043819cfdc477f4c091469fcbea97b7ee2a2df18ebb75402e1ed7a52309c51bfa6c46e7ca52193dea474da6033a9ac46fe10aed765609abfa44f207bd2f40b017f6814c80c7117c8f0e53413c0431da90d16f19ab468750354589629b95c14a4d2a6967e2a59a0c32e3aa8fd7442e29e309c17f60b5330807541e44bf45cfb67c31020ca507cff4188461b35e7aa0bd5fd4f209a56ac01565bd08e9eda8bdfc44cec8f4e6dc665e13fbf0c62488b8a0eeb345da35284a949d9bed35156fcaba1face37beada371600fc9711151866d2b26fce738b4483fec07e988f4882b5953cc8770998b6e6e70b8e5d275cb916d8762c7f1dedfc670b1367c0250267dac1975f301e52d947e174b2a872b81d91ce11238d4c89e8b1a44fdf16e49950bd6759f09c2a2bb84159bed7938651cb89e8b17e5b32432171f08afc224ff7bc310c413181d14f3062df338e0dd28401a76a29ba17ae7b848a765874bdf86fff2d90d059883c2024de3c46b98ccdb5744c1cc25a75861d2e345b738e39f1f672c47c868fd40bb1b93a8f85cb84d6f73dd4593f4708e609aee2874ae73f86c35e488d346b9bca8202149591ebbb4c8b1f8022f40c61826791c48a603324c7393123836a64317b31304c9c9d9b15de0b115fe3c69a905e747c9f8a4c822aba3a96cec703c8a2d635c04ea811a7256fd4d67eb8caae2cf05710613d45df9d799b7b72b926fcbfb4b964d1700356df0f4f6c2d588016bfc438a85184f3ea9753debb1c9e5ef3342752be1354d0cdc37b06ae58dbe47af0a24e337d1a47e648dec459ba27bcfe8113546f444ac69a5fbb288af6cfa9f0758fd998feac06f602449fd85fad83d288f3109c63762f0633da77aa4d82af87ec02cff4cb083b5789411f87d3051f198dc8d5a001daa0efd77c5d5eca960a14ffbfe42a4ddf8ebe72c6f57b332fc201d3ddb44dc6235e8a5abaeb5b46bceaf9bdc2970cc4370f6a34fabf3893b610fc009b3a07faade0d609eaa43f5a157f1b52d76e5cb9fae17ec2c58443ac7324c5cde2aec45da12693af4d24590104c509272ec3f6b1a22e72fccdd366e4291bd58a4f2b04f6f048fa97c49d08559ea7055993fdcb6cf70e06c50242fa650de8c38969788f384634db27e179541574c0d54ad79b57e6e315887a727979bbd53d3117faad8a93c5093ebbc786dae174e5f11789f929bd142c07a8f813288ca57addc6b69403b7bb1608055a127283d0a1740dca6e9dd5f0007561f0f64c97fdffc14bebfeed68d01e45b0fe059ada49048714beb8d656fc18f422edc226b7d56d61cb55fc1e7aa258a5daa7895d7e5f04937b70f17ff6ad8bad3c5a71c95f2b0e21831bfd83be8cc3cbeb173211bd091b58d4a100635abc7b031673d8d1cdb9f81c72be12a40e681d992268ef84ce916018384bc61cbcb6967efc27d671215541452c906e833ce7db57ff7332f4100fff69cfc88d832bbac9d6b3e9ec28f6d7c02b63734acfb399a619e2bfd3362b12b968dbe34b0a3d45f06cc9b23bdcc57bcf2685e81d24e6931b44a9da164023dfe17d7581f5af6cab499cda46cf2bb69e645208cd55f2a1d1dd6d51b903cfa1c8100aebc4196ef5e1d877855302e1b25d50f8442681018c2c9567d65d8d83f5eae02846a511a249b3e050935300bc6d6974fc8ab3fdc8e7c91595b5ca6f393fa13d78af4677188163fb45a243d977a10ac2ec6e31a148e4ab04bdb6df4268e49a49d5bd252adbade19b4ea2545a9a8318ddb2a850efeb08cca3692afa41b207a3ea741e6e2968013f823e7c1aa24f483b3f34d76e585d6830bdeefcb969c7162368dfadd454533de9acbafa5591287eefbf02bd50c81db7b166c146835d697614f0be24f19a5846427d806ebbcce40dd4272aa7b58719c9a6047f84cfa5ee8c143cc75fc8e0b7e406af194d6a3ffec8bb3817d8c465ea3f192e932bff31bb3b77d4232e54bb19a31b6c3c2c66a426178727ce333b48bcfb60f69730227527ed498db5abf68bb04b19f1e4db4f3acaaaae2dddebec76c3f506dc4f99099f865615c2804c58347f3d09afd36ee43ededb6eb1ebe67afb67b39f21beff55c3064b186363903a45c9fac48f69a054c460eb72f3a0f43599e6ca70b68d890b34f2dd5c1a3b6e923ed29a24b495b8fc04e4e095dffce33f7cc4c8dfe2776b6f078fcb942caf0a3d32e1b21656d41436b88bde2d5c59c71a7ad6c9aeea1f3dd57d364a06d710ddd0b1697aec4e59f6ff703d189c2e0f75247f4b91f12312b04fec3dcb9c5f3d047fe3341e9a18d53f9e4ab82d3305033c18f862327e3570bf1318a953052bf021cc7bde52cbc150fe72e424295d800ca867c0960596637a797864ac63cd39d41a3c503d9cc2fbf855fe6a0460c53db70552c142301896b20fba923582ef944d576f1235b84296ada2c2b057b4d6120ae439f6f8b63e6a29cd1c0d0181a9b0d54687aa19fcdecde361000b6a1a416f2d4e046ee197e4122e26c41994177aa90dc475c9c19dc62fda8beed77165a7dd00ea214b3c60aa454228d0547b059b0d283cc7ffd796c1187729b422dc386c4101fb380839310e2af0468566c95e591e7a7746f4d13f309dac8e5e84bdc43f100dd7424f9aaea9c14828697ef7670b3a659b90033f433f4c7e56f93aa94febe4b0068e0bbff9ad5cb3344a5ac7c44558b9708a6e7e15188e136a9351147d075c722cbe0cbc501d42d454d0529f4a5ef6c3364bb07d51a290346f198f388904694d4c34d50bb3215abbf6a61b8cce404b690afc6c84569e017c557e541ad2cc2961f64bc4267fdf059b47085d824af86db9882f4d57149d353524899a9bab292a648de2482886d04fb303f03f9f92ba594ea309a71c770d6345adef67448f5ad37eaad9416761a44f6e91fbd636f9894c6901b0e288798d1e9d21fae2b6d370d2c324b4ee73e210351d7d82224741403111047025f5d980b80d497783bdd68dce25ba945d15b750b24d765b318e4040493b7590558658cb57c23ceb5329fd160ddfa41e22fd5eebef935b86ae7e05d2d4d635f8789b4ceb0b2fa69640b338e96125dbc23c5448a351d7f77a8a519dc6c08fe46d185f29e64db0631de4d01b43bb37fe104c1bade1700cc89437102afc0aad4745d46abded76b60535b7d27605ef8fa2129be7ae0c1173d756af93a8fca96e03276aca3fb882b7662c6f009709b716a8711316bcccf13040a3e934ecea072559e4fe28390327c3444eb9206437d5134e4b9e12b6cb06e15cd83a7fa104bbb541a4e33a4056656030e14521eb3d63254e8460f347efb039d00084bf42885a0d25a2a36fa8ca0c510999014c2e0d5d000ba127cad5c5d38b5d7786cccab4f0b662f17f1fa9ced767fdfc8514f7e6e50a96def783452c41fb818a313ec81ad0ba07d33328a6ba7e6843b37f3032cc24abe672a041d92691bc7316d34127c8fcc4a224b641b6e248a4481bbf9dc7a6ab29ba0485330e903a9f64455735482bd59b00d6c0fc67706b25a4b135fc3242465ba10a7be878cd1369ade14a6ce3678cc0a8400c09c0ffbea58a704cbef343c615273a32b458cf7878cece54b0e69e8a4287d4634ee3b70e219a2c6bf22cb7fb98234a1375bc621532e24f9bfc9cff190daef80b27c2e950cee2c90bdcb31f388bb43019f66c3ae2a0f92c998869e11d6aa2a81cb2e2e7affcb8fdf46bdd38f3cb73b952a35d8b79f6f4146b6b0a14d0bdb099d0a4962d11f6d5163e870b336604a8067080b1e5a0ba1bb0872970285f8353c0c9ecc867cd0fe9d0614140205b0cfeef8063510299904fd1a51e8923022e44c977db5d4da649f447e0395722278efa6f8b1f7fcb3fde0dfe2d3e14182711d6bd4b2c9154ddfab9998726dbb1ad0890d143dd9c06660eb65e766914afa1f0c21766f17ac1280674da4e1cf10fcd3b595888f07c7175905eddb1a4f9a48a89e600f41790297af3255489c7ff61a93d4534fbcd6460f5482ce51342aaec8fc096925f37930c7c6ee07dd6e02abae801ed5dce008fea38d688c511e9d8e5fc05b3281bec982e287e1b81e4b69aec57f85541568699222174170371483f81023d03c8d5268c01e366a110d9ddc661f4a5f94bcc19c0cbe295a87612fa6849a6b7439a73417b0cd09f9b5a92b2685b427949982785e026f1dc8a5468568e18322c4704c424a1e3edcdc5ed9e8a711d2440fa7f31ea7e4553541ff5aaeb3786ece4a476da39364ea5e5c582343fc6e8a59d964ccbb6281307bf5d5a33469098125f3a78dfbf662b58a18a65d144526c8afba2e809a44bbf78f4be816664af05865e8703575572a701244d994d5e992ac7017492c0afe410d3bafad23ac857eb6fa31938d4e38e718c6c6e13c428cfaf72b009dedd8b07583ebda8275788114dc373c0fccd0598c835611d972f2fe2897d7e6f64e59cb47ff78a03717709a89d07d968ba249c5a55da7575d35bb46e900d53a2ebe0cc505908be5ea7fd9285ed6c27e819fafb086bcff216222800a087c6ab53907cde97baa5d1ccce0cd04444183f81595ca47f8b7bb1cf843080708aeaff9b0753f8b1f5a8f10c2dbc655ac370c567b89483b7c8eaa5bb5debb9678598ab8b498818744dedf07650154735b3663743ca8d88f3d81e2e71ad4dd7904d3c96dee7d5beabac2f9a335b8a6b52ef6fc64a4bc62967a14722de3c4939ab69240223da6c1a496641bdf33d386edaf415cfcb059f279e603595a62d5c141a51e47ef90fe1e772c3d755a29a4525111c896e3a2c50b90f75d2689438dfdab268b9e0ee11f1e06a482d836994176a6f0cfa7b854606bfbc72b742eb77a6f38b5acb76ae446f16c306e55b5adf9baeab2cbb552180b2930d8b4c7ffbd71a22f588c73283e1507bb58a5fbc040dcad3c8ba106b0dd30ee33d3e1cb391aeb6c66b0cbd7981009b723386ca14ea04e4791538b297359a87bc9a23d90a7fe0ad5112c4e2fda80835704747f28a80c4ce5fd4c8ff826f41e0d1c1c414406eb38574b2b15d178dd5dcfdaf203719d794253e930d534625ff375821a3ca623b61156eec7cfe713570f383bb4472ea529fbec02da490960aa8556427979859eeb086ec65ac1e447765c32a91775d9d37b6dbe9ef254dc02c99648be965dcecd240f207f6dc756c5aa48f25635c94e13c88166a9383bf7086bc2d96593ef4370c09e7572328ca442bfef868e2ec2be1119c2672800011c387e293178e523f068057f760fb650dd2a507d574cba9931750619a3493e518c626eb5c14dfab1a975ff119d14522f880ebb58acab4a197b4af6cbc7bf041a4f6620581e3f41d3065bba34192ffc412323f111becf02163d1991c0cdeeee74e57e988527a97af99990e96614cda39f96eebb95c5966af650c084c534116e3eeefbe4131c60666343826622fe1824c254370566c4bd36d9943bc797ae2b855cdb3bb10d24b41e44b71c559152fabad86c6170868dd5841c9d12ba4bdf60ea73edb7ead0258f1c98eb6b66df48abdd67fd668ae0c1b7d2be7fc60de62bc93438efa2b69bcbf686690c3e06270ba75120038f874ac925cf808f4d090a368ca1dc990f348def923cb8418beb598f9f6a7584aa41b79a31eb55747b7c97014948e52fffe4c9ea082c5f3145cd735a89032e9f5ccc9dfd0d7e675db3815dc6546f1d0b2814f03d10b58a4d4f243702d8e3f24dba06f8b8f7be5dcaeac8bfd82cf28ba8aacd7c2451c0d0323bf09f4cb2161bc2b82266debaf1ca4c3c6ad3da8c0a7a1666bad0a72eee13f1c3d6a8ef12c55ee2af24295e4b1a0f1d89e80b10673f414f4302443785696b9b9d3eb81689e9675f63b5771c96392b8f5ca74f8e1fcba33f7f33dd03ca721e6cd15c192483d662dcaf934e9c30b58ca3514d63a33d3ae405129b8aafd4927075732faa69f39ff7745ab1c489faf34427e0dc63a090a4073927e2d493888872c67a9bec5a87c4da65b18ee296951a4f37fa32e139718dcff6a80db79315e661174be36ef7b2b935e2f78419fad1715c1b1d4412a9fb44fdb104d34740c3b1cb2a97a5b17333994c6198ae5b7a74a5f0ecdccb9e71d47def2b38c36a5ccff840bfe29b24402aa4d1e5b162490ea7f540833c70648496b2d1fccb462e54a591eb9988925cf265a405019fb226832939cbe03db7972a864b88200fd1891b9b3d397b545b877d9415633c2b835cb1c67dc435be36560a378436f347d4b40f76aeafb62375d8502b079a74eb781518f85bb913653b1e91987b1fc0b8cda89530e5e217c95058b3ce20a2371b43bd570919b976d551db85403bafcc93b649951be81608327c036e8fd3be594eb5d838923716ae6d2f219fdbc8de88259487b113bf6300b4cabbd53d4bd946324bbef92006deb12bc48b2acd2d0a9c435ca860919a574f5b17e46e9f3ed27aba6cec2a21afb415d4e6c4a0829b6985e6e00b5fba330bcc732e7084871bc1e0a40635d05b66cb337bba221fba31521665dfe990ec7d3c7ae77086171733031209b268ce97e0ee6dbeece3250b04f61e260b25e6146df68fa4ad18fac00d268dd353c7caf8e065f6b324f285923bafde5b8d30a86e0851d999eae710d2545d05883ed241a7cc4fba0629e7c657808f3845845edd27ccd3350ceaa8eeede354e31fceea73100cfd4a423a82b562e554b7d10eccd7e12df6abbcc5ba43914b00bd4b01cd85e55b8fcdf3903e6c000fde01cea3909d67b58fbafbcd8eb6bb1c72d6f31b43667b74416d3a863ea1c857a683d0eb590409b6a21344c6ccfe49364f2f9dd52af13d01416de4b09eca151574f0ce0cbfef717eb3b38f115c7b030b08989010d670f25e669d186584f213c32ef3ad2de147d05525a1f0146837a701d254cd5e44b4c95466bb434b4cc8e2fc28fff3f8251ed73cb5bb50987174fd13c8179f11b964869d4460e429149c9ef51abda47476c316e75ab3b2a98d715a1f8fff56abf5e4d8e1f71a0a56cbc02baf812e494c74a70d26088aaddd199a38ed59cdc2b50b057cdc5c6ba6795b1b69f96ee2e11e485f648127df1e7d6abc4941dcae4a1ad2a782d0f979e3312d88a5488abb555d4f1a6db98ab9342b4ce35957899fe157eab03476aa99a7d05b22059944cd5b675a0dfd8a7f9b33ac0001d98187a64e19e264082e06dd4ceebf849eed20c46eaa1dc8d0e43ac32b5982719923112ead969125daf32a51d46497c6659cacdd1d5e77af262f09e0744f6c0effd21d41c9591bbd642d5b078fcd2d7faef8085bfd36c6dc79b03ee3308ebf44ebf4781f339249ef75e3d5750e8c40df6608fc54557702e57817809e3751bb26669df892b5d7354064b449064cf7d9e9f4edb7f163ebf8db33659ba42cf06fd4e5f8bb892181979325e416dba533d455fc138d6baa26a13d676669c0e3e11f5892aa675caa1eb521b92bbba64a1081e58e5ba37b8d6971a387948e2d3769201414117ae597d518de85ba2a8fc3a795df46d54a04c398bce87b96da34311903a2f27e43576b1949516a94cb721e68db1524a3e782b275037d5edf59d74697e40cc039d42e8e930f4a10baeca4542fcb5176306a3af05f55d39955004e1dba06efe3f8f01726e8d642292a688e108bdd35abf57947b7575b29e6f6cb3fafb7036083a2c83c9973a28fa7930360e05c40eb813606b3c601d8326d80b4f9ff6e20d8db07f580dbe6d97b2c2d56700d888692aaa563b22637324d96685a97e3fba0d6231c5b1e53ed00e95bedb3286d14d99f8c45597198aea2f0bd60805aa93eafaca12402d79938b5f45a80815af56b509275ea2096de61d2fac605e4eafe30e6ddc649f5e29bdc0cec176cabc319c91b201e1900954b5f1c8294ec4ae2cacfc34481fc3e38622eedef99c2ffc2bdab9cc6b04451b59e4dab1b31a67ec50fdfccbed10a3389071e708d78b9c50c3974fa7202dffe23ca03b8cc64b10442d6a1fa83646835319ab6b6067e29aee1b2d8344104b0ebf4b94a6b22ce0795273c60db6ea24177b0ec279c30583ada75961006f8237e9fd6cf87f97cd1b78b63beeb7fcacc9e37dbe394057458f50443a11d1d85fd1ea633428820a783658f182fce3b5d2af2c3a91cbe47f7c6f8172cfde63061a4b321296d018caf5aafd2fa25c3c307d930068e088039bac3d84158de37a3881ed99a085de2278477b9eb8af210919b52679109c70bce36441ddef38b8f7bc3b72c6cc7c2099b484afcb73fcaf0e7d47ab969d952597a039cf01000713a3d27fece4721b9c6ce98f0748be7e9fbee7fbb31d4c054eaa4b95902ba496c281a81056095d23282d7e1c67f190f3ff54911906ea09972c1378e513d8704c03e7fd58d2e2c63fc56f95f65b486a1c428ce6c045063f1d36da252e820b39b47b121717394162e22e7a57a3d9b8d9f3bc6246750e96e7e8b429a00225a322d43f734434aa912d00381be7abe3644bb47c26e73548088c24b49203bbb63f5a2542565f42781c27b493c5e010c5f3b75c28302539d737ddc0034eea60210d3b74612c3c7d43e100f1c919a74939bc462ca50fde3594671d3b748b1bde4823c2208ddff2d616f382b3028a35cadc5c1cdac4daf9f692e201a5b8fe0de4b740e3f13f9910987180f6be504c555b9246d60986c15e76b214d29ce4ffdc136e5720902939171fcd5a09750c4300e86dcb763728f1e3d87741162ad892826b187e02a8961f600d4c8a81d545906202fb9876cd838f8164988eae43dd3cea711d15c65b5fe448980354de1184bdebf054a9ab4d03d17dd7100235556d443d08f3abd8bb78d71f49bd0683d9015238674977b4e83d9c2c1fae074fbe3690612784d6275076c345a630c0a1b6499e855c7252e1e765042f438b69c7394550f95aa31d37e2a65cac827f67e3769d938294ab2c94fad6592b27f59527c31619c011bf35262edbed50f7daea91477a5ee78d50b9ab5106a902cab1a37e37bb99db82782519869d6f818470692f68b85994bb132a2b36650eab0df667769c41e08d563dd49649559b2871bfac4ef6220b3bc958fed997b88330cf7510a4730f3d974064e629d2ba19799fa7304014c5f585372cc7a4f37b36968cd215285bf2cf51ef9c622b355bda5c8e4aa387176ad82de82388c69c738ffb632e33c37d8f4b01dd2f515e9e87aa80544f1d0103bdfd664e6df2a70189b99bed222fab44664dd96b4e62bdd3a5f2f85eab47cadceb013f8a60d0c40463d51bc1ed5b894147bbf1e88ae438b76d956bcfe3bd4bddf3885b84f37fe7e700bfd669e1cd4f7b7361cc5d3435e54c76d759e78ad430fc0ca34f6fff6e1a265027944d64db4b578df9051a44b7700f597ea91a299f318ed1010eef9fd67cf768c2b16e434c01eb49c9cc96034f821ec7e4ee080f1a7f428ed81e69f98389f1d4869ede480c468376bb47e85e75c8734020eb4d6b9346156bef0f9c22e8b6ac79be2be0a78e30f880250fb31c3dc357301e6cee08e67e789c5f7879bcf126cd38c573e61de24bc69be64809bdd7680b72cd60f0dd2d3540de9d98aeced3fd3347ccdc46c0bcfd3de9dc73c77b068a714700931c1d79ec22aa7fcb09db5eb51ffac9e7d4ddc8bbf966725011ddf9adf98e11d3505915fa1b106e90ba62f7a09c8885f123281becb76c4900466945ebb70ce1e107ffebf7e99e8ee9f2651e52cb94689e378196b95fbc58a7f6384e0afa20f542d34e213d89019380"
        }
        
      ) {
        repdata
      }
    }
    `,
    {}
  );
  let hashData: Array<Object> = await data.exportDataRecords.repdata;

  errors != null ? console.log("ERROR: bad wizcloud request", errors) : null;
  // data != null ? console.log("Hashavshevet res Data:", data) : null;

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  /* lunch demidata until fixing graphql hebrew data processing or renaming wizcloud keys to latin: */
  hashData = require("./demiHashData.json").repdata;
  ////////////////////////////////////////////////////////////////////////////////////////////////////

  return await hashData;
}

function keysToLatin(data: Array<object>) {
  const keyDict = require("./keyTransDict.json");

  function arrayKeysToLatin(data: Array<Object>) {
    for (let i = 0; i < data.length; i++) {
      data[i] = objectKeysToLatin(data[i]);
    }
    return data;
  }

  function objectKeysToLatin(data: Object) {
    const newData = {};
    for (let key in data) {
      if (data[key] != null) {
        if (keyDict[key]) {
          newData[keyDict[key]] = data[key];
        } else {
          console.log("ERROR: missing key in dictionary", key);

          newData["unknown_" + key] = data[key];
        }
      }
    }
    return newData;
  }

  return arrayKeysToLatin(data);
}

export { keysToLatin, getHashData };
