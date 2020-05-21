import DataLoader from "dataloader";
import { getHashavshevetFormData } from "./getFormData";

async function getAllAccounts() {
  let accountsList;
  await getHashavshevetFormData(accountsParams).then(
    (data) => (accountsList = data)
  );
  return accountsList;
}

const accountByIdLoader = new DataLoader(async (accountIds) => {
  let accountsList = await getAllAccounts();
  return accountIds.map((id) => {
    return accountsList.find((account) => account.id === id);
  });
});

const accountsParams = {
  parameters: "[]",
  datafile:
    "0c61e292d66a71326e011b089534ee146ef5c300a4bd922fa913e81043819cfdc477f4c091469fcbea97b7ee2a2df18e69724b3e19cdc5b0d37394085ee80683504bd4c8691c950f705c15de23455c1497357c1df22367f437aa850b329bac14567346bee0db9d88408266a7d62b4b32cbc7efef938f4ff80a16c2972ec23a90787e3971d5fca9d58280b934938378893e6eae234495a38e26c24b81ddc38ff6124705464649cef92297ad914f1e6ba9239c7f64ee2fe2ab19fe4aaf964a5070c006baafaac0b279d7efaa2c9c553c0de2b7064ae42a49ac049afdc6583f3f68994b7f6b3b0c746cfa24c94ee491be93d2eab249d870faa025e8f6c801887dabfee6449898b2e12b9d3aa5b03885dd8328b58f5141c34a40b19bf9ba0308a5c9969144bc01f925c1a90dcb78309b6e2025f6ce8417a7bbbf0d4366457144847ec0f687cdf3733e4fc6ea27a9988084f1f4a7e55dbd69b910ad0683d46c7de1d9995f4b966771a1ba3f44d5a29a69a6d7904c9c74cec93f12372abdadc4af61d0951de6c094f89df32fcff79fba64f28dfe9abcb660a58bd0e3d1ecc8f00833d107f7ae213fcd0e917a13d0cb78e09bde53f5b9e96e5d4d7296b680b8a80d9df0c74b1970ae4382465127c579c48e435822ddc383abd86873e0487fa6494afa5027dcf52bfde92cd15b9be6c6533cd0e2b2080106c1adf24c6c3895a2d0a663a38daf862f2e522ff74529b0b07297e551772e40bb076b64ff80a105fa5bf4bcd10f7f255f659aa07308022aba01b7781202e7a70118a5d62e3d7a55423ab0ddb915a89c4f5fb4a6aef80d7218b5c3c23b918b1ffc095e9f9de49ba38b4e6d634c14dc42aacad01ae3079fcd0ee9802dcf3a09d01c3d4e5e20b08bc29fe22dc3797168194bb3c76f82a1b1e3d9938405efd6481334ac9fbf8a1f5bc39acffd6a0d1c7534dc22e92e851526cd89a7460a61017e17a2182ee7559d2363b39e2705fec0c4fe9a4ad8ecf6105f3ec6197573933fe2a2bab27fcbd789791918baf8ba47ca413ee81b8b13b797962254f03c1d67b4a8fe0306738ec67c2d416d7f47650a835cf1a816abc3a4e28f65d1a21641fa17dbe40a838127cc82d6c869072f909e0855f277bc9521cfab768d5cba45b8b859a9338be398e502fa1ba06ba9fe485620f5dab09577541a40b9d145a164eb78a314a8baffbeb7766dcc15b0680758131813e7a25c30c99534f4870887b5bd0b22bca5feffafe7e0fe40c06782c4fa17e1b42cff7d8a346b53321389bc94d377da849500d881dbee1c7493a2e5f482a81c77dc8c8e933290545b07a0199c1aec4c504b40d88f730ee2608afa08c26a529b6e02919e6acf89d079f9534eda66a5abf04e15c82b74655135bd42b1c81e8598ab32283e6887758e5f3b192ada0139318f822a48d32ab424f029e35b92164d6269c7bf18a1ca8748f8aea8cb8f97d0501ed253eea0752b11a46256be749f912c3a0a5341ff172ae53a011f0355c771c12f0d32b54072b1e1c29bcf562d23b834d8f76869c65efb544b6010e3c83751ef3b8f58de214e1eef506021421f8db506c702c2b914bcba47b59f1abe606bb7dda0aa72ce7196ccb360ae99eb01288e8fbbcd47e61e47d3fe5c214c5784c82aaf11398c252d417955822d3d69697da970e4d7920887846a561f632de27eac6121a43c1b5b1e42fcb8d95a3c7e536d37d671ca9b0ef736f94b898747d6a672f365d0f5f67a86074a0d2bd411d343b26e7942949b4a7daa2f11128c1111b35867699768e008ca5ed2aae2700360a67f25e96df501a90e13f58977874b768aa565c00a31943721b5093a8fd1970dfe45e1175af11d98bfdfb31c765620ece42919a5b0a39fbd5867eaf14ba97e4740dbf3e0c7987a1427e2bfc8e65c4e43c437f2d09990502943d810fb6e83e05d49443873ec59e8dec2af8c03467d2b3c9981dced4c996da27cdc085ab2295d08a0ebfe799722af5a23922f5acbb185db4335df1d2475f929b3bb0f189ffaa4bd7419c088daf2d90722be2268d13bc288207f3f2840e8e2e76b8f6469f8c6c6de9eadc242f0123da2bc7016788fff89962651a787a4ddba34d3f55ed67c5f0a7077c1d314806a57d59aefea26669dc7061b56dfdc496c1ece3a46fdce5ebbd06ab8b7dfbc952db7022ae3722cd891b776d408df52701cd427ea612146505324607582b3106900655df25e49472d4a2f5e606fc9f075bf00be06237da7a4ffa7abaab417ff11af153f28a78f43a3ac91447b8be9f712f4dfe8d25e32e392d3feebf87edb60cc601ef82fc9336ac31ad3b2c2801281f1c104286eb9b0f796e90c777af9dab9692754bbbadf796118b1ee7dcb265852b5981a1d34851d1a009675dfdc26dc2394dd2b98f2d3e7167e0d7c100216a5391766c3141137ade99c0026d3b4746f9571afc3ee6d79d28411aab67416928f6030f7f878251756e0b6c3548cc2178da15a5535e208e943d73ec8c1b6baa486a5b315606f8adb5cbbbe5e6199ed53820796c267c2deee4f61b0e91a605f628b24b43860572a3c718c30ecc5b9e245a2d44979125d1155b87eb5d29ce52e6afa3b0317f7f0f71f326a793ffe859844c01e7ac410753e40be55f4452a60b9892879917df1171f00110817d8c8ef4a5b4cccaaee5183c8ed14a08a428db6aa3305d5edea2bf1976aaa3bc86e04b4c43c7b3f8214ec1a5a142bc7c566c069b3602dc8542257f1abc544502b5f55076ee3d79b99b7607fecfd66a0d771473541fd6bc22028d65a1b322190980eef4360d53613569ae8d99443e6eb103b34ccdd14e81068a46e610dd2ac203041c4c06a857cf93bac13effff9658ce7d83221ef2f7ff29226fd85f1561f394fcaf26247eda210a6c1b390ac0b6ec17492230c657370e64898ae260bc7664c631a03c1937cd49d29bff00cd3bb6c28829ef5b72d2a9deeabc1f9318bca6e4dcf50116c94f96aaeaefd862044434d7a1dfa614d6748b504ad4033b1e1f09eec777fdfbcc757a51015bdd0afd8ce2b4315d7f3be30d3fe91382dce48db3f76587f093fa874b8eb684b5f7d6222328f96945a47ed384982c04418d51f174ea684572376d1d5713b9ff5e90530743687962c450780436d341a554735842b45aac26704a2d65b96387ef8c54b8bf5d5209f446a65c847a167e1e4510c4870aa5dc58c9e7600c42a46203fe09951b0676b95ffa5ce2fe979a48faf6df03fc7849ff1c0ef99bec190e6ee2137f79ab14731b52611a56a46d2f1fec5f7ec24bebe9fe70813559360e140b16898e44df2a65a0518e92f02a388cef584ffd8a7a721637dda2ae9c965082d418459763d1189807fd15b3683fd60861a503ffa50cea0ac1c793084d16b78bfe7a7859e3eb369a5bcfa94e625054a27a2c3c80b6db0aea68cba764a68194781404a4a05c941280c317d44378ffde5e120dd0d29ad73c4cb4adbd04845a12ef957d21b9d942fa78c0f007bfc3264fb7f1f15c6bca45e424acb3937e7a38687035a88c76d7308a20a64d9fffcd33a8681765174d2b7c18b21368724243637f8af27ffa655f29949b9140a15f0428ea4dfb49839a3d627209110dfb11e085596c2f229e8c39b44fd5e2da0b9f69de71ce18fe2229f5a0d7e4d5459c87450eef502ef73eb64b42fd084b16993bf95ba7ae1c7109bd162c9e9ae8fbaf5bff385ec16848af73684591195bec9da2bd196634664301c687239a767b921f1150ec56936858708bc23d8ce8b9ccf3a6a3cf7b6c3036ddcfe858487a90b78ee71aac1b6515822bcdaadc3eea8c8eebccd90d4e7dd49bcd3a91fe0768aa2425399498546aabdc4451a179e205cef187c5f5ba606ce2e36c5d22ad2c7036874ff7d66be95840ba0657dcb8ff9b70f7af0768469f6656d0992537c5508b03da448c532e3d58fa809f97c75be249caeed70d128222c24bcfb14bb8adf78d37b694fa7863aa6b9c786916e01f83e29d81d9672a27470ddefe4bc222a5b773e001c26f343768e9d4edbe4946716adee7461da2015cabc43a0f54904be9b91bf2f2fe5d7b694c700ae86c1af6cec2e17b85be490414ae072b0ee6ab3dad3f28323317e834feb0d6b6abc42cbddcf4c913c6d9714a1785356c7cc7d8e5b1998363bc0d8e1acca4b172b6f954c83a5abed2a2b4f701156088cf791b16bac758e7e2b2fa886463240a41304990c8d1ac2b7a0e2a6eb3c1d274394c79fa36519bf93e46ce87905095ae74120f66dac4fc3dc20adefb7f52a0f81a31b7c4c555819540104a5bcee63739e064d2d9af0b6b9d6e784f58e24ec28260b96310c5e3e26015e5dd253e76873b4f35617520aae4fe4fd0a86c617d750b29163155320a33181cee95a40eed8b0bd910125b7d26189b8b662890d707f6ab4817bcdaa879ed3c7569e772b6015384bde605ab1b2cc2d85d615bf88397126bae47c31c619d985b294303924937b883cb03adc5c7f4050aa0070eda2e7722d517f1a2617d99d41a3207c8b41c4a7d3b432a04604ba5a0f4f8c5922ef1d01f00a4804734ca05f9f98306c319f544d746089a96ac783810b78600a453a0c904b0e14ebdb867b8091e5ae8e90d0ee81e8dbdce61311bf3af853b06186695ceddf92d554a4db26efd412db76b92fc272d3987ee711775f055e0aa021ed10f97ee8a15b3a2e0e49b06e3a3d43266f1856bbd1037676d4007c18ee2d20e5a122e3be571c19bdd95d9d1ecff1c4cf7e0e5470214535ff59c3537a2cba0670dd1bd55b024d96c6c69068296185bc6878fd5da0a784f31bd8d71e3b056f4f3133fc6bf23f3f13f0ce42130faac457cdb39e27077dba1c32fee2ba957bc272221fe5f522e078226b650b7c53bf9c012e1e5b8720fa21a756beb1593406952503cf7a5f469cd515f4db5ae8cd0581b6d54439e86b4292f9a6ba13a6faf1efb82b146d7a4c570a4a3e2a7d131230971cfe2bf9740e98b2da4ce4e40e7e8a1692537dc9e50d80d5cd773302660305df31cfa4d69e04556bf810d112c938374a3cb4688e5648548640dbd50caeacd80913785a477a3498333543d622064e2d2cdda0cf1afb5beb6f085a938fd64b187f431a04430ba3b5515a7cf0757f40eb1713afdb986eb155b806c31152bb84fb4f9aca9ad034db971a128d55806934151e57af30df3f06c3257072f800791b2a0137ffc03104a2508381a3a7b01e309bab47b38eee0ad32ae4e61ee620135c7a8097b29ec4dcb80bd2233bda935bc697bfe3dd9b8d85fbdb108370612d0c87a013b8b500a8639aa1cdb3e278638feae5e3a4d27d237ffc78a37588d6caf126241742aa8332d774b480e8b8a6b4b6767964b7f3ab7433cfe0e33ca79bc8f6f13fd1fa2bcd2fb23ca9bf1c540c8a45353900f2e509dcbbba00703307941da4d296e23e43b80fece9cb9b784def5bc86b2c3f36ac85558e0e48d13a0069b48c4acb8bb8121d5040138dd118b95e89b272de1d2e2c269a181d889b183220293ae3ba1253df452ea42dbf4e8d7ec7ca71390ba228f7337afe61bc19c58665082572566a2a7e6fe0539c0d61ed00df589e619b62f717a318fa1d4516c94a84be6fc756eb6976197535b10d67e00a0f57007724e7918657d4580468ee7e842b5288af2f0d85484c70e5ed53a4598a286ee3359ce7c812573c01c7b7cef9536e557ec7f687cae1ef6e792ac2f55a80953d093394bf525d09f9f58e70619b1cff1e807c3c8b0480adf159e6a7d4ad117017e45037a6b9f7fb4faee6579072507546bd0c3275f2378b6a93d99d9ceeffbbc19ce70faf2fd21b57f3752313d18d6d097c1e99e42d2bf25d6ac2ba404a0a74abd13ce98f69e0fb82461fb25bc2ad26cc75b2d45adeaf7fde94135908f80749af0262a13018387d5993855e1f65f6c5f2b1311663484f22bd3d40943bb6ec7110c952dc9517d08c1877be9c05db4ff7022fda832601286a3b9419711fcd2d77ac4bfd0e37a6b348ab89dc8efec7c49b6dc8de3f9ae65ab65616144d8c0eba9e530727f3448a523b48348e1b7d77b5b1883f21ff29ef5377e354effee86fdd646db3ab37438747b2b002499a84ce7e98407c8213116f49e4834104acf5687b15180623aa73855ac015cd458388dbdf5a8530fe7bebc437389c2f200af2f5ab51dfeff0a58cbdef0ff9581c674c9e95d2d93036cf96957faa1bb8bb4338f5b83ebd48825b594daf28c1359491b24117400468f7fe0f5f5723df97b051f20370be87f2302bd46b89ece3c1eddc4476a95a630d2ceeb4a8d9df0219e333d9007d2457dcff6c8cf62f032f1823e3c62d1c9c18219ead252cf71ec3b609521eef360d17d983d31297f12db9965770d480c1b2efa627b93963688ac3b9f7492381347da1115a893db982e38fb0aac9b4861629560d894268674b1ed9aeff13d96bc5d53cb73388f377e2eba5967b6770f0535e4c926bfbd1516369967bd65c5243c9d7aeb32b411edaed87b069e3f83312a44d423fbcd1137b4139285f30a3078934fbacb6ae83094b0c34813adc65181312183b15868030c19a92999057005d5fcc7c917b071b665c852971ad0185b0d7fe864164cda76a339fb970b03780fef0272d150fcad648e4219e167a981a667c2c15f3bd29be2053016641a014ac8dba1b542e13c8ebba90943ef36a5c9b351638c0eef79ef2a9001923c110b0a5a5d811131cdc2b4de257818deebd16cdcc6999dc05bdb427ffac326375c7bb4c2974922955c26700ff45edbf84b3b0a0008bcef6660aad2da57a07d7045221bac8e04641ce4926ce905960aea11a7165f4d142146ed6e1b96f35c2e9a1f09d6239ab7f7b1daa8a763bab07b51b9889f5d2557c034c456a333f9b0d2fd51cab07368e5084ac54f0ba6dc9b30fc674b212e915c7a43d3600739175501e91a0ff6e208ca25e8b04214ba9b89e62a375d1db14cc6e21a381a6ba6896af264c8177959c3bf2a984e8f694ebf33b814604c82d4c7591a5f6f492d9a7f6aa4d6017070a2b9167ff05ad5dcdf7376c968cbfdde5f3df2c5eca6e0f8263bb46ea15923af05b279b1a8c598b9a030f8e937f132b53765ce3468dba76a4e08da7311c5aae2bf5833de2cef6bb4b63f604946db971a053e36c4f977f136d4d989251600900ff737905e54c83437f57dd3b7c7f10e4c14eb0054cec59f9508fefe469cb4ad80c6471692e9835f55002226951dc8ce16d795b9bc9d23f9fc295c4c9f061055b02ae154e7202e9dd968482a41d83152367b0332e165d15ef8700fb4b09a620cbd6cd21c9efcb659805aa65c3994156eb8cccd1c4f89265a3f4e9ef01b8ef73e754cb15b780ab1f9cf415ed6c370152a25ec5daad55367ddd0048e3d335ab00bf132877ec2242c71d20d45a985d8777618bff814b42785639ef07d9f924d8b3688007b6a1b7b27bbff96278b413cc7b9be9e3bb9b4e29de61b763d161604a8c956efdb97279442244f574e17c6f5144e43972ea92b66fac86edb73b06faedbe344959288a3d1acfddc967956871bcec5455acde9de19d1b2ce69206441ff8eecfeb1efe7618ad1546905832dff5c4a11444540c503c3fb109a4face5958360166be3d0067db746ccc24fb65e4a9c23cf79c216129a0d24510c8345ba47921040bdb594c751af9e51279c0ea7b2ca09061381d4a59bcdeb7d7dde04ad75f0357a01a75a44e8691168beeefe09e19eed0e9386f8123c0bf748bb25da0317e112b461422ffb37eec7e5c98e15a67f3090e9529e852a7fb119c8d77a2574dbdd5093a85014bc10f4f2b11f59a74a1991c5c63dc52348cf26bf34eff67e29052cf171458eaabcba48da19277d106ba500e33d6a61304dd8104ca31ac721f3a847dd8a35c7da29583c9c63d9e109f99bee06a560da79bfd5b883e077081a2a67b4e3cc7cfad0373d2739fc6885433437e508cf205ada656a097e0ffbb8871d71600d054858995ac2b3525b3cef21b2e33790913ae00a8b1676a4e71a29d3c8db10d3aab624703938d5ce5a340ee46bed9357183aa426620b454e4d611140554fda947358785d878051cc1dcf08a4544f9c6f7c8f29cf20b3903a654ccf6710508aa99ae7929e21a8d9b9d77a78f12a12378becc6e06b66041ca06141ae68c9229b1ac4b05f7b8ba20c7780b655bd4817116260e07479100bd6e2f3f64e64a7a440088992376779bde8673fafb2008efd6861342bb9ab0d32896a394f8fb132e10fc5a2c2d669a43d5357ea92cc949fac617c4198d9e2c88104a2134afe5d84ac3af216543daf3d99b3be94af00ba5933274db482da4ee7b65bae8f671e59c50305dcbd897bbd3b32b76c9bb05781b848ad0e1aadedadb6d960a0910f11bb0b06cdbbccb8ac2db8df97816cfe0ca8161207df8d3b6db7e741210114370e591c63d6f87343c21dfa8691cf5a79580ce7dcdc6f32b8552a656296ef3156c2702d63a7a8935dd42c683c491b123a525515f4d2a54c9f275ebae1e3b0895d069a66ff06aa48a3f476139ad4ccd19914f3f9f4bb164716633fd96a62b866aaa9e7da189df21828d14409206836979fc1c9d439cf665a8d9e9fc194659f594983d6dc7aa7f6537d18bce1bb7580d59b1c58a3557a8e9ada24149346c744acaf593cbef12f0e3767789f96ce213d6e3a1873a95de2550b674a643722f64e941b3248247c7b5851bb38aa9e84dcb9b947e359c36415d4f3ea575c33ec8fbefb2450d521f6a938f026e0039b3526d1c740dbcc9793d3bbdcce11fce1d270276e907b3d90f478e3f4faf43b997580011952fb80669326ac454be520ccce7f8f0c16af96cd8ae32e9c8c5c37228e68b998a3a2a7c94143a173a94cec4cde8ea8fe6afd7a3f0dd73e26422183fc71ea139b4060e15d092b04a361344834bfce3d14231feb0d297b42a4e190c9f2f7b7069015bad95ac8d5f09236c91af04a827a97b0a5195f7d909e6faff43faede10b4ed28dfd2d7c7253c9348d509a4d371ac476968a41fa156934958e89a368416f283f29ac092dbd5a91e2455aec0bf20d1d17670ad3e8768106f0becd21e0c525014e4b8c5bc154dd3a5d3320f51da6add021b618c9e4587eee58243b2fa2d837b83f132b8856029b0de4f45b8c2c192e8f0225943e221cc52400a97dd0e8c1b3683c82edf28d9b045e9fe19c11064166ce0bc51c0be0450495cda059498ac341fa9b1beaea28bb2d73361700e21c0c3b683dd53f979bc0ce1e417453d01ce3417ee42afd04ab42e3997e41563dbe9f6592f67d0a0b30c707d979cbddcb4ce62a0b73a22618b35a677a0c4d25ea549616f3a9409e523ccd90e1fc2abb3236e977e6a63797027869edd96f12656bb9a2fdf7d5f3fc9d4da6f74efb37c7b80d402ef0f4df1cdf01e723a35ef3242d54f3457043349bac74199afb456f276bd657154487ed769492e7a00bc1f2cacd54b0395f0d46281fe526ca60e7667b727bdeb087ceafd84627cd9c3b83ecfa306f86979b25d1c92b3fc70b48226aa56633658630f864021cb049e05b96334dbaceda9b883460ad988a6ffee8040e1cfe91165c9b93d3edfa62ec6e6d63cf513240322c34431f0e299411a05497922b7406870ff7887a5ef31cc9c44936ee61a393d2b55eb1fd86573e12fa69d1524ec65d843e2674b811b5e1ce78a06582e294e760f658f3d8824369c72e941523c3c94d880436cb7ac83099b9c68c3450d40e725b5e18f807e945e53b774312d7ddb1e07e3d3cea823c0de4554925e0d06a2e6262ba4988fce7f599f33e5fccbebfc8f2d7e38b2ba3a0a8bb53107b91fce940b06ae6c4c8363aea0859e39f888624d62755a59c9feaec943344a5c1b89e98e8d3541e95e3ec343aad8dee50bed5cb042e2f004d9f15db4b873a2ec15b1e4cb2dd2608aca3750a3f929a5eec48f256fafcf2b4b5b57987e7bf57c17661a66ff2b1e7e44d91f017649c574d956b31dc874eafa1bb09f8fd79c87fccb8e76ff60c3775db8db3ba895d66dbc9598ea2bc08041acc79c17b800aa77914c737701235663615dce7d63be73a4488282c054344ffc46e447dd391b431847ddd4930de22d1bf797552ba9bea969fc9f16d37d58b246b6c231106f93e5347665e14fdbe5d0b22c7f9bcdcef8c8a1abbd4784f5868a3cde17efdee5dcd96a7fcfa48445ea6e39b0bca32a50985b5dc0ac67e9432cd670a039c339ba44af307e8f9984000e525f8ac1f2eb793d2da7f4232d085a2356c29909369aacbbc27accbabfbf3e8e2d47d95f33a10b95f447cc5644ba2f1a2f98b7e47fb4a7dfcbc7078d70db7a997d2a9041f46e1b2766258af42d50ef94c106f5af21583e96a0584683853dc",
};

export { getAllAccounts, accountByIdLoader };
