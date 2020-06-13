import { getMesh, findAndParseConfig } from "@graphql-mesh/runtime";
import { wizCloudAuth } from "../graphql/hashavshevet/wizcloud/wizCloudAuth";

async function getHashData(
  startDate: string,
  toDate: string = "2030/01/01",
  fromTransId: string = "-999999999",
  toTransId: string = "999999999"
) {
  const wizCloudAuthToken = await wizCloudAuth();
  const meshConfig = await findAndParseConfig();
  const { execute } = await getMesh(meshConfig);
  const { data, errors } = await execute(
    `
    mutation getWizcloudData {
      exportDataRecords(
        authorization: "${wizCloudAuthToken}"
        exportDataApiExportDataInput: {
          datafile: "0c61e292d66a71326e011b089534ee146ef5c300a4bd922fa913e81043819cfdc477f4c091469fcbea97b7ee2a2df18e3ba9dc43867be75825073c72f1a3b45cbe28a43f7b891476b81526a22828814263a50e0699f3001d29e0cb20254ec8774140d8d5a8687252709cc517cad16a46579791c34e8123ff22d0f24fb3e3ec2e6a2dc027da746b69ef6f9b55bded4ede062e7c1bcd31a6b768e91e88fe8d4fd26c07b6e8157e0391d3adb1e3ece58d9ba8c533c85a2ccf3a17f1c9b5bc66a6682039237ab70682122607749420f8f6d3ea59c77b5ca332a16281f39b11b38f95fb00c886d0e0138bc4c800b7220931caa90912d1e16fb84ffb9a7d7907169bd02867dc6bc32acdf5471caa7ebe32d66b9c7508b0bc783573f48b01e29a6b67fd8c2db0c2c81865c5f8c0619c90036935497a644ab8a1457bd1214a428d460472233b5f2b3dcf44a4ec0a1ad57cd62ee843e86925a48e578223598417e5e6bd78049b8ff3225019816944027614eee8372cf7f61c4b2454e8a87263bd77268258a681d1130f4dae3bf8568a16ebcf7fae3886ba4208aa8c01bd8d605d3d73c04672edaa7549701e9985a2c93416966d7ffaab247b077a380e86e29d2bffca2c135f12525f4a392df696e87604ccba53c4c0265704f95e13ae6a57fed0b4b93294cc0456c80e8e4a8c76ec82d3e3ccad6f1d59d014ee30297a45ea83002de0aaa32f055d4cf96183694d579b304c086d6957e8330374a84af8430f39b8879e3fb53c07559ed8671f85fb5465d1ce4b6a6596f1fdb0210f6b122c891f34d7ce1b3c79219b31f7eb70c1355a4d55fcae04cbe264506a299521a587c6df81e95554737000586be4a4c8814972bcc6f4d49646eb613b98c0005fd5d26000f3f9d78da238d6a4e68f498453dc051709e83604de648f664fb491f5dcc7b57cd53385d5fbf3dd586f2d7c70a5a5fd87663d2b0f16ac8a3417f16648b13501a18d22c94227be3d3fba4e9602ed8a09df8d2fae22f8ec37b2c8676192ae847fdb9091d702360b405e85a0d8a44dae01f2282a85276559c44ee886ffcc32b8bed316d58e709eec1402c7f113bdc3c43ee61a1d555367233d88be2d98770ffa25e1ae0498ed67c2a28f531e7fc93b90ee829c24d0a9a1acf28295727a5a1fdd6bd489dba864b0f6ddf78694cf16264ebffc9a16c30adbf148e289ec327f650ff8aada5805ab92cf4b8ff194d740451f26a1c97b142507b7ce84817dd312ed7d57cd43fa313c26ae690260cc1cf46397f5ec2eaea182fac3a3e9014b7b6f028f236ad1774da14567d5c1c883f45de61f015456634e3fd09bbe26d0814bc74c56611c486918b09d29ddd28f0631bc504fa434e2e81af9ece4531e8be6e90d40c6b5724f3dabb7fb363d33b6ee5679db03fb9c33fd3be025924e2a5d7d9b5763e29f1a126c6ce856a2aba102ce69b5ca0b6b4d882b91411503922b42bc6e94d178b1f466f22b44b8b4af6e4530737144707d2f830d347bd4e2b4f6d79762cff0cc27a642098564ee03b157d5d3bcc270257c038f77edf343585a5af2e3d48a0df03854c7ad5514576b5fd0b13d0c734aa55c15b27bd5b4a9acbe1ccce981a6ea8f8910bc88502884ba2367e80789c7bf0ecbeaa21ceb4b42e68250971f6dde8d61f99fcf2dfb4657bf09185b7f6bfd08af7a7c3ac148c657b01739809502fc686424c01c95dddb964fafef85be3072383124e337073a1d2249f9d109aadc5230c6dbd6117493b03cdbd7e1edb212d07b0f5fa66336fcd2058eb79c7eaed74cba76e0e672c9b237e6b6da99e09391fcd2d4bd926713dfa3c995acb08ee043ddef8eeb6f8d568dfd3ace348f22cdcbc72e3fef74af796dfc1bb5e06aee700df8b61c4429bd15c3c6ddcca2836d072b34f6e3c118a2b59c13b010063246d5d0f099b1de471ef1354dafcaa866c538d05569ea39d39a7e00b29f2bd88f99b0bef7ec7ae9b9bd2098b3e073d213afa4f46973e63cf3d8bcb524cf9afae03bb3c787612eff09ae27958d1e84185c1fde7ebc941332be6e6d8cb68ee1791159e7a0208a9218cc04767f6b6971f4bac340c1866085c61fac4045ec611a4b3b4c083d7ac5a303da85e350c3a56f6e15bed3452703f745043b657b7d2b26265e55bbc0e0b4479bf3a0c8e3ebf8c8b89605603b7c89392178f688f9c5d3ddcebbd79e6ef9a0a59e694aea79200060f3b1e9f18fa9e830ef2ba13be553e05eba77b5bc88241c6ac9aa090ff640486b25b1afe0a8d6d17885974c7104039d78660136486636511b823ea0ce78c5610d67a93734cea0b830ad2746fa6aed36a177558aeb798a48398cda50a4948eed2c11855e24338eb381f39dadf95d2f7c59da9a415a1bbca328d6c8c5b3fd058d630d77ae9b6c3feb1e04a187aa93144a822c72b09dd9d6c974abe4d42d8da09180b43e76aae320b85234dc91c4da8e103bd890a0b3260c810b0b2c169d8addd4037c7af8a82e9101688672e6a01615930eb9bd5200548718b5a278679cbc20d4d91fc044fd250c175cb008ef46a1df749a4487898d307f05da29d02e306e61895fe59810f3304829d8422c172c40b8a1b76aec48f5f676c8047e0a54be0fdba79caf4e4327f5b983ed80f352bc6df79792ae8ce7caa1d0556c232a1a08c7474949abc62e14da2920f7ccb8669a9b0e1800ee65b908dcab1d4c544ceb21d9a2863b5d3b862245a71e7320a8dec056002b1e62083e5373f423d768173b71ff1a86e92df9b436bf17580d4b7f53e971e28d60f5240d60d2c4f2f9ec354ff361af6c88ddab1e3ff98cac83de1b58ddc619967a6638b3ed4192b5749b5b4b48d9b9e734e138ce58c7cc95450d09a67ce821dfccef39b6cbd677d2d9f7681d5672fa429324266a703a4a2368672ab50b64046ec7a2c00dc2999dbc299ccf67a9d6a40a79a93ee1a5541f6b092cca9d98706e29ba67aad6922c7d39d0048355039bc72a85fc2f86771ab5811beb127d0cfa737131df65cb3f296ea4c7310ce6c30aa3cffae3f548df7ec50f70ea8fcb9775782c40451ae577c03c30b8b670d91b5fbc2fc79e1d221207efca7708928d3123e1338d5987fc734740a589b4b9ef8e9242007ad049c379da8f65ee08801da053d924030b0436d795e6ed34c413654174554434b299a50ce0f205d5c92e21657aa6c8581554be4c4640fea6b1dfbb956e5519483abf101e9be20e05d5d82450d3fb7f27c584eeede5327d0637c02b5fc9345a0296842e57314fc4f7e38a260ac75a15d871c4362cf7031d721a02ee80dbfaf95bd42628c4892e9da40e9de1f80775c51f23e09082a6f2ad428491216374f2d30267d620190a246db71d020a9e48b28d9c356ed0bde130d0c6e36fbf335875121d7faab406f67836120d084263da72be956bb34864466efdf2e53ce6fdd61a6c27fc3e4bb1a92de62d172c8aa1835cff28ae599c4ccf3885d93df761a834fa339857739a13cd5bacf2c1f2382c50fa4c7bd7f5d7ff961f822d92b662f2043a72fff6da41deafced315a8c0db9ebb35fd8a9cb0524cf41c9b760ecfd468f2c5255bacc97139b13b0bda15ae9dd91d026b8f69c7dcf496e0b67952e662dff751a4d3a90ce8de01822c25ce7d24360f8f78576e8710e2ec876ea15e1626b0c43a56ccce46e0c95f7bc370054eb6948935b3a559a7995241ee004c35010f7f990b95cc869f408f0ee53cb8de0bb3f1a7bfa43de086a533a2100cb26ec6ff9cba3d189efd53775d7b7f3e13ea11881faf5517ecf182b7612068fc13c944e6e8945cf9d4989805bb394905db33e8fcba213233ab18f691833f3f5bf93aceb3de87aa632a274bbafc00f19415564fcc42d447aa370f6070260c6a138ce58bbdcfeec43b8b44d7c03dbbe1ffd0444876c5040dada167839665cb1fe8f7b9a6972b0931940b3e08c4997adc983c8c319d6fe10c9d13d7d68e4e31869e3dd48f5aa1fc87547ac342b3df5c9a97fc29f6d1095602bac5bd4e92e49d42a7c5d8fd9f03655c5cbe8e0c01532c6f9047e6a23b2f83c6e88a394be2e286a5b650dd6cff7dd889e1b638832bd19ef18093fcc29cb504e9238e8d6a235cdf11f7a4d8a09e648612cb2f0bed77cf78bea214cb19edef2345bef52824eec88c1f116c85f2be9bb9efdb36977a78c5efa57334918ae27f15939a2b1f7d9409e3cc2c1788c8e79fd7a76266da8279f2f654013118b3749a6ae21c219dc853129b64002230eb1b5d2db9fba80d4ca312c79a4512cbecc30053c16e231ac6cad221bed8f6db8a9499547d119743cf46809adc84de821befe0d37e6ff4ead6f4dc40723cbefa7f2db22bb050d5cf4fff917a30efe7e3f675e6616828c2b8f19aa7cdc8a6cf96ac94b85aa7a1fc9b3999e849a10b3c8964c7759d7f65a66e68fa3053c580d22edf09d1a59a3e523868a0085921ae448b422acc6269516e216d5431ecb7b95cf2c0f553d2bf9de0807028e270c121eabb738202f26362a145cc3b9a0e32df1571ec75bfefb624e527d9bfc839ab2839cfa68f2398d6796055034604cfb702b98a7a9a92a3eb5c743dbf6509e7fa2c9fb389c610c45f74cf19c05d94f20b4be7a64082eadb95214785ca63d8e32b76b13fdcc4ae23a8dcda4bd112ab17f6154cec31f388792b8e8448d18f5c5509883f7c762c13269bc58da8bec74431f2cd7d4c12df761f278985dbc12c2b47fd9d5cbb2a0422cbcdc0adee453dd55d9173ee29ea73166ebf244f1bce3523d6735951ba1584b7805b76573918dcd34c8009466cbd5f7c0f55a588f389002070544e80234d86ec8bb7418b45978c955d1de69c41d77b2e3f34aea1a340593724ae03b3307f6d7357fb95443b3cd72852a3327b7db865f975e42e96e6a6fae6e255a05d8c2825bf190d689baf2e52c4dff8105af1092c2a87067a392908d5757770a6cf7df75374dd2e8267186c01892b59679ceb7fd62d0af271f98229f3633d06629501b35752654d98d2e3899cc7954bfb02df675473e36486f2874f84005d43eb89924fd74a4735fe14160289b2e5f8788148b01b0784b16a054e38b7e3ba87bfae3f42b2d9b74d0ef218e2dd4ee432532c16d90e40338f505c5f975a18eb2a52354f874258bafedc40376699ebfc9870fba61a4aeeaf2145cd39257934d4444cde894fa429c608492a0bad1cde20274047812df8bda55ab295b02aadb8023d1a69514c6ada7003bc0b99edbbedfbb36fba0e8091e0f88f132e152b387880bad2d16dc76c9f5b6397af07be30c9ad58ee4d59496b5aa5f187981b736bc3c9fbe4c8d1529ed31b538860b28b13b78516f70d195244bac3307aed69de804124bc74899a157da0593049b1d6276c61e88147716b1f8723472db6f67f441066a84c7ace47cb98da4ba14646851984d891e323d9a0f992bf34ae0242f1a24e11bec4dbc2362c3ab157b2ada0e414961cdd9159f26704986a8a6d7205ffe022b49082fd3661941b8323714a8136cb5e1dfe239e507ade96dd8ad1775266f8b723ed9a0b6001845fdbc4f08b7fa769a3204a916e35dfd92ebca00ac444dbc0a08151f784e632ad7bf0193a42df438bd5a5836818e02e10040c03e119a21913e2b2fa2d2ca68a2ca8f6ebf4773da964fcce8e0ea8bb35e4d4cc65458d36e4b8cfea17bd571a3da2053938a853a25e4e197aa1b957919eb865ea74f14114781a1be24577de6ee013101226cb49c93cf06661a063f124f4f138ebb123542d9e2d1f3d407a10fea21ddc38211ce28701e104221ab50eb0809b7fcc89d8c7bfa933d7b716c703aeced0169867f74c3fd86b55c4e7d1da7aba00a553afbc9c0a67a36e94f1a80b363baf8f3985e1d367d418fb3a71c7902317b98004795d2eb5318ea202fba8c7c0d92dde04d1344fd29728d4eb02698ffc58c8ebb463387917c5bc1d6775392b5195d908ae907ed65b8d240ffa572e04451fd4c74aebc91e82b2202391ccb953106e9522e45d170006b437decca88eeb93d8368251e7de711af181adde1818eecaa7b9d3a7b37b485caaa47e64cfdbc0ecca99b1b65293771cfd1340b2e00f57122289588e5cf18b7b12d1487a581378ec8c5bdbdc267c3ec6d54e0caea9736880e0bb4112bbd5261e83131d24f9f81ad844c216aecf8b2beea271e930e9316fbd066ad686af7ac66a335e1d28dfa0ac0a895a88120a846883bd29b4e54ecf9ee0cb0a53a99a2597be0fd40f2764b54f18b6ffabdb4f1b94b9635ce37ab645e215ceb7e063861731262fdf3190a8043da47e09062f92f226fb17d18e88100ef5dbcfa07a2463dcfeaf5afeac91ab3d01d6428b79be9cb6101b9d97b42945071f83be9d3c82c08d40f6f1123239b01fc739958cd9f19930efa88a8017de9761527c63cf0ab8da65b4cc275892dac65b1c80a3271a9b17966aaa7ef8eab5b5f419d84d18b5f7361b92633c33f465ecd95a2f6b6da627c3bfa4c7ac20766ed1cad7ff7b6a34981bc78eb4bca12db7a4a42841e0b1677d0bdf520956d1323b862a7e166b5b1e6371c6c8dafccf123664c1c04d9f6c8c1f3fd533dcf5a1b3af9c5e0bd8e6b43d22643d6d429dfe80ba371ac7d374e293406bd522122878136b733482ac407a39cb9ef6f1fff63bc9665cc9bbfbfbb9f37b75209b7d20b942aec3db13c9d1b88e0345e21ea4ec02df6e7cfaa64e6bbc6c069bda23f455b36a70bd23fb644865ebd98752bb6526245b8beb359042fc50950d0f9a8c6749495d580a8ffc122ec53f7d30c262dbe7d7b6eda64acd37e7241bc3c04eecd32ac2e6f3b102ebf36f6ecd229e1df0bf2709b98618fcdcbbf1d19dbb525344e522357c2829133f1dcb6d644205ce10340f5af1a6814504fdcd3e16a9f07cb68a2fd6617560804d6b745d9174be0c4177a24052f9867a167caaf6ad9915c42c81f7f871a1fc102030ef2a8929d3e36bf3ec4f4180919af56fa57bd197d96f88afce40d9e1b4c0a2d4f82b88387d2a0c9c2467e94e7d13ee8d576d163a053780836e3e5bbf2e556b14a133086792a3e8586980b2df5a2b8ef2e46a377251f99fce98ac03041c8956445c0d916fc01c0f1b3e2df81a7ca7ba215e20df2d36d8bc4732dd2040c7bf52d3e4871fe37a3cef02c6882c1c0699fed1060fe0163ead0e3a2438c9c0a5c2800a2a389c561a48bf1543a3d08811de1ed374861f0d5ff998bf7b64b9d33a34c85f64564d7a0abe4a3d1df445ff647ce5cc7713c378bbab6201b3055ad7e6070b5ded58ff096352267116ce12a55963f2d27fc85c2309f46425f564925749f6d4e70a1e2d9fb404a324e8dfc6899b592e7933ec309190c187d716a5380f8b7201637ed6be1760d4310095872c4d764c584bc9934e29961861e8727f56c7b4f3e496158d89a63287943b43842eb0724377d08f1d3f8f06a733672db087a423983982779e746e370aab7aff95e54ab636a928569cae2b0e86eb3e05b84fc90eedfa02d705cca8f1bfa873905f4fbd36ac9c011c4cb58a99b725a22ce263bf5f9c78d889891a616a84ccd6a47672097a22ef056dff68f56ffa3ae6e17801f383a36caaeccb17de69cb3fc2fefd9c5a4d33f4d6570d672d3d317c449dc38cdda5e5ec43e64b074a28472f9226d159ae52abe69e06b5ebd8651a6630f15394c74712009fd76e41dead3ad8b77c289ac9f7bbc2e7f7ea3d9b59d1eba43eb1bbdd43ba6af518146c987ed997a2a3aa147527705cfd28336fc4364d9fb8d22ac338c53265ab8bc0eca6523f280e230d39032c77c6785a3bbfde73f562b7c6375682673ff5370d7f94c28982e4df42ed072d5ad1613479f3bed8ce8821de1387c3dcbead81cfb8584545d25d220509cd018d4867172b6a09c4935761cca8766a3169a49ab9f7f433d3e37141d3169d50b2e259addbc6f6efd77c6c758990d273141d61b95707ea47defa4bd2fcc63c33995c8b8099e79172fabfa20d2ba58b048277e7feae31a610547cebe96d27afad3a32716ce8621f5929d06a6b923ddf942e0b37978e1a2ba9afc49c5945a780a41a8b751618ea483a82c5576cf17540460a61df92aac54067990d5389f3ce03199542234b8921da197807ca62077136d160fcbb2efc94549ec53a5d4be98f8aa0d42ffa8a8f9edfd7c68e1f4b8204246f04d1f0bbf77682bb424673292f040835b48d833d035a25560316f47cd5638b9ae8384a7831deee90de9fb4108287e0d7d89fbbf971997ba9127175c0fd065598283c8dbfab51a8e4ee3a5a54f8cc8e984d541024df9870dfcaec7a8de03f5d14f09269f2bf688b9df60986cfde6b21372423383000fdf8e8fd6ee6faca65c0b91372ea6283793289cd0b166bf4c8303b9f8be37b8367d50f821f7ed2a12ea484f9dd6293686a4c37e243298701cb6bf9e58a1a519856b456a81e9c938d6244bac336539f78783de51a9037ffc6b6725b03ac35875730f611864520b5baeac912b330b49d369159cb2bc4123c94345de5296b4281a6c32ec29f7bde1dc8325a08485556f8761a43aa60ae63578faeaa1adb4466f097fb4d74d3313278605ca8603b08cbdc46b8c9e156f97d7917615978b9ba18d3c2ad3674d198c57a4084cd7c92c391ecde100d3b23e2b0a8a4b65f4ca958d9bfdd93ace3e46f164ede93738946129378f7dd919e5a1f6cc87654b5c10ed75191bdb1f95566c21389bb4b5c10eb1366558bf734ae13f4402a5211975ed465853f17bfc6d090572b720be276f723357b164e023c440c1bcb49a3b039ce17366035adcef36531f1b8b3f654519dd91985ce78e05a627b7d8dff30780d4d0cc2b42010026e9c40c8af0de14157b3dbc56d6296b381c473b07a235f5f75c97691eb2c229de0f29fa0ca05197749b10b6b955d41a857c888dc5dd3f2b15d6c63069605fc9fb13059484ad2413f56c097db2ebebfc60dc7c8a47f57e7f3c91c8652dc65e7024cadcc0d17217f20c655b8d15424cb68dc9065b7d3786131be5460a82508e3f19fac22b42d88a359553f99d8be33779d3804f0cb2c647afa6b9095f736e6cf7dd31aa83dd49dcac713c7081dfa546595c7667f8bcd23e39bf1a4c15732cbc9f2c46b45750a87a3d15b84ba55f040e8849650bb72f306e616bd434b84aba490a0849df4d5a500a951db30b0b9180fd24398542a88430cecc758086405178461194c0f5bf9ee2482f50812fb83b2e4aec9c1489d4455b44a855509f23deb6239afe35ccc7585575beb9d5a3ad357f1141a2dfef1c1cdaf661d35df15981c4e702e9872098ec3834c01ba49424373c8826da113f6a8c10ea8fc91317b1c267b879326385fe44daf333c2a1ce6295cc0b69774d44a5101f18f79f24dbf440b603128445b599d50a0f58cd9c36a7c87ad8c8368897462c3bf055b5a2a7f34b5e10c381a839d7aac77594519f7d74b97be0e766e4e0844d3cf3b621ac4c997c4efde648faeab0d89c615241ad1d99f6e8004789db7a20655208718f1eea6e491334c3c90c8ce89aabae45d3660696e3ba062de26cea973471f8b6fa412e2117dc8080e5567ea2a8db2278a9a2fb6422c1cd2f8dc0a23cb2a892ffe1edb0e2e56a98051db445f7043f38a7a71429c7640238b640a527834e1a84600bbce078dcf6dc51e5047524d8fd3d42b9ff6e8360738dd9ce6fd2bbf585f24e31db3b01fc8ca9a9da3ba5f0170f0f2e938a6088753a1ca8cd0db00d4ca1da9be5e19c34ad118835ecb0dcf9216a7b74bd115bb8e9d1ffca296e468bc40fb9f04951f31732aba6f6814761e81ff08014ad69e0f8a76860a851dd3cc0ce94ca927f482f3dd649f0642f13ebe8d26f2d24f9e9516c59436de433265b6bcf2990a7529df79041c7009a9e1f4eb6ceb1a0609b924f94a0754ae097b4d8410e2fb9bddc4151180f5a8501cb4a0a475b20607a05777be647461ebd466008255df769c82c9818224b6a25d7fead2dd95d239e35871fe71ff824e46c6d06f5d7d009fa659f06f4f3244365947c306157c639946a9f057c00be9b9ad074537a8b173f4698c7d8dde7edaa1c8ee0fc71753d82b11841cc5e1963bca4e15d93b68cb13437808817cf0207c97eee7e2867ef8afde68c749a2c27c8d9293170b402f6eddc9c254e19c936dd4147b61767abcbc4f3af09073a690405a52f8bfac5c8a6162178579feb18ad6434abb44059bcb0337cc0a093fd87f8ce71fd4172c4885fa45779167829054ebebeb6e03d1169bce55af13a1361298c30f537127a1552b1a8126377cb5e68261c3daf713a0d2d2148f22e36507cb57f6b1cee61e05c7b9472bdc312d3f9d659c5d7520002402b00819d22bf229cba5afea8141aeb2e442a8f138f0afe85ae7e71090cd0ece0e33c2fe730e3781f166aaaf9e7a2dfddc097774e33e2dce2cea0ab798ed673f1b96d42233e6638c6ace00943b93e2f205f555bfa7ade191d6d9b0c0b0e7d9fb6163a5b4887b5bc9dd78ae44207f75c13afa2cc779e35d04a5a7b6da681388933e2ccd29169c74776a61afd9759d5b566d57a79e895017d8034939baabc44f73155fc0d92e7882bc1bbdbc050a062146e9840ab8c4c6ccd5b84c93c0b75da95637d0d85d3d083b5fa671a0575b68f91c9ce41fb3a9c2e638768010adc3ad9cb8665a858fc60e6d3e608427ff123292a25a56d34a6d137add37dbd92bbf712f7d36c79bf3510e8aefdc778faabb85e353a5fab5781719"
          parameters: [
            {
              pName: "__MUSTACH_P0__"
              id: 0
              type: "long"
              name: "חתך/transID"
              defVal: "${fromTransId}"
              opName: "מ..עד"
              opOrigin: "from"
            }
            {
              pName: "__MUSTACH_P1__"
              id: 500
              type: "long"
              name: "חתך/transID1"
              defVal: "${toTransId}"
              opName: "מ..עד"
              opOrigin: "to"
            }
            {
              pName: "__MUSTACH_P2__"
              id: 1
              type: "date"
              name: "חתך/ValueDate"
              defVal: "'${startDate}'"
              opName: "מ..עד"
              opOrigin: "from"
            }
            {
              pName: "__MUSTACH_P3__"
              id: 501
              type: "date"
              name: "חתך/ValueDate1"
              defVal: "'${toDate}'"
              opName: "מ..עד"
              opOrigin: "to"
            }
          ]
        }

      ) {
        repdata
      }
    }
    `,
    {}
  );
  const hashData: object[] = data.exportDataRecords.repdata;
  if (errors) console.log("ERROR: bad wizcloud request", errors);
  return hashData;
}

export { getHashData };
