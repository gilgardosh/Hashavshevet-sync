import { getMesh, findAndParseConfig } from "@graphql-mesh/runtime";
import { wizCloudAuth } from "./wizCloudAuth";

async function getWizcloudAccounts() {
  const wizCloudAuthToken = await wizCloudAuth();
  const meshConfig = await findAndParseConfig();
  const { execute } = await getMesh(meshConfig);
  const { data, errors } = await execute(
    `
    mutation getWizcloudData {
        exportDataRecords(
          authorization: "${wizCloudAuthToken}"
          exportDataApiExportDataInput: {
            datafile: "0c61e292d66a71326e011b089534ee146ef5c300a4bd922fa913e81043819cfdc477f4c091469fcbea97b7ee2a2df18e42efe8d7df4f9696e28e37652de341fd530eeeff766b1e972f7a31fd7b97bff4371f5b55114669f6a4c5aa23ad79e53a7596411ea884ab99fd465aea9f008261620abf41caade434a45ba8ed860b25950330d413f9e259ad810ab3f5cefd6716d4a3c247e4e8d8554a730ebbea5c3f56b249401f28363fdd524e54db6f9be9e81cbcdece730a500c4b52ce50b87c7e405a54da9398c0d2285dc1a2cc92640ca2d385fcd89605dfadc8c5eb4c1f5f25ae6bf2fe48b1d69b32bce87d32720500ee666c458a0aa52f8e3f4e83da90081a0c63110f707b716597e32bfd57f351a778a1b0f3e6584e029a0442664a421234b9a8d8ca572202805ceabbf34433360e32c6d3a2a1fa352ea3e2fa3f4e4093ade41a1b4cf27bf6f165186c5c652e820a859dd55bbfcc6cbe66ec6e6fc0efef0629dd191aea6ec263b0db134c9add085d26bfc88d6d8e3ca4db6239850377e505aa87cc990602e1313ecca876aeffcb42ad82f85ba374694dfa1abcb07ed909d57214740209de7a9f5cb7b3a1ffa3a9113a79adb18317f917fb2648a3871a6c9083e0cef51833d41407899773457b9c18ed5aa581b86ebf343a3b2cf3382a2b4086dd52177d5082fdadcb78e16bdb5f324cf3f683acbbb3faad66ddfd5ab56b585d164741b38292b35d61f4d3a3d35e421394477379e1f34e29cd00ad8c35ef9984d3506b02b3ec5d75ed644cecbc297a095dc7bf7bb567a415561113ba0275850cef010576e4db96a55e8dfbcd6a8f255c3043f41b431608b2f6c8d66cd5cb6f91a9dbe2737be456ac4494787bf64aacd6b13061b7aba10f37ef581a3d824c8beb14765e0177e6146feaa7a6a46666aaef604114b89ef989ee6085749166b7bd5e0f8f93dec590ea0a946d8bbdbf39ed8afa5def07706fc2db740b88616f039c73aaf0881cf09f89a8432d431a36429a7e782cb03baca445fd9f8c1451d9dcf820f03c9bb806fd088494eee0deeb3c22d9ceefec4da34a9eba26de4bf44ad8ffa78760ab272c841b99c46692e480de11dae02b8de02851dbde6433e9b007ddebecff4356c6c277b098f41ec428e03897a42ac9b8f69a3236cc4f5f9d2b468a5ae1bcec518ed53ae08f3ae86384ae55e384b8132e231fd532f95cd415848439f25f9c1952e851ccc30d7c0dce8757497be5a0911c196af5dfbe0c2adace0f2461faa5903faad231b08d41c6b950abe6c40b4cf337b57826522fccaf8a3ef5c4b3e1adc920a658895b62c5b03888a99c41dab4682594163ce60ec1a7fdc673ec92ddeac0d7a618416fc780ce1882fcb12cad0d581e23ec821c9b97a8a70a6500df49951476840added142df8d75ecbf7eab9c653bbf5bf1226781f3aec46958ae901dd00adfb4e7082538fb624e3f86e75bbc10f352697ada4794640c6f025415fc23319398a7d71b52b473e0e1965a57def3ec9b8461ad0382716d1f48e20098a09410e894a2e2d3b607f540951908872813fa92e03abc0b316ed9b08c14af2fce87395011325ccf696aa276f2a72c5f5752af0a36a2eedf00edb98be1820aaf04feffb3a9a5bf8ef4692842f171988eaf6da6015c31ba5d48b5eefefab9fa841e7e8fc4ddd113a26471c19177296353a9de81c6624e9aa259a3e748f33dd7ed642c03d1ce4fb38fd1f7b8bdbac4f9a607df09590225b6b60acd28ed817268753b2007c30b7b123512d7764bdcbd3205beda3d2e195ab41dc041f22099070c5aae5c1287efe8afebdc8875d1061cb6da8d4a66af9c38eddf1dc23efd40fd501d0ad71369c46e9b771f4d76aed2818c4735d63e09c98eba71e1938826345f6c93e11584049cf4739308954bc4fcd358898dd43d5860f06c9d503f325c5206ab688dff5267cb64a675f74df920d1310650960c98ecd243c6c7b409e50532452b574df3b5be37d94df10dd9013e58e3c69a6bb5515c77ab4969409646f1b7c9d94c6d64206dc42551e9fcd6a7a6acfe4320dc21256c63557ee15e449b9fe431f2654f36cf2e8c341564406ce4bfa314def4dd41320cafdab54e4a9991fa2d040ee3b7fcf7f046378f84ef56f3fd747408f18d6daea5f3231331ddcad5c6974ee6d5a1238e808fa365cd9cf6031e3ac5cea3f5db1b6b5fddae8844de689935d3becacb9ac66aa85f5bae62d02aa389b1228ce69fef66d10e9f18ae86abb55895278dc0c2d7e03ce5a0eed6e8d3fc53470395d1b27bdf6f7bbcfe2aeceb45565f117cd3f0aaee281d440dc22f0d19260145463be5a189887dd365995cf9c60593d96097065719d324273bf38c7d9469a3a7d04128b267d7c1e00a48050ebc7bf7e73557f13ad10763af7ab35766ae54d7146a7dc4fdeeab8a54eaea6ddab58c161204c70f3c763b8381888d70d0cc6202cf78007ca3882c3bf793deacd827852948f1be9c1f2dcbc4ee88672152736085e9ecd7f66fbec2224ce86689754809fea488f5222918d97bf7c633c9116d84c347e41e6f8eab6ccd42bef5a84e18b88fc65b6bbfb7e00b89a3dd8831b2d36839b0f3d6cf8325a8a37793e26ed800eabba5e852969c81b5ee4a604b2a967cee3e43c0e9252cce5791bad8d698fe7d30ec324029c375e2d67409a7936977eda97f5189878f9d6192b52e0e7db80462b103015e459511368f245a54560acd35dae7493df45b2349f899031c93f458616727e552c37fffacc0ad09d2cc938856e273d33a4cc15096043e3c50d60075ad7adb3c958d57a314f54bf7f823c82c8432172fc7f6e23584d75b2377b98b3df88ea06244fd25cb52349c2ce4624d5e98e5f153a6538dc254c67a83bd906f2a92f1e4cc0cd1f842b801e12d83ad24d75b7cd3a98974b782f11363457f2f618df257dea96245c1346e1ee7bf291fb9cb5eb11914051c0dd13be7775f3956d49ec80323d7913ba37d5f571f47344a65f913750456ce70105d245448488a14896f1d65d082d851c19b33d370082234d3637f1c12527b598c7e0409cc855385de5065f83ce3fa6cf7e02292c1f1f4412d67669bf50e47e6cad7ca1b9382f63a80ce5139fa3a3fe506943d8254e5dd2058a41996c48c71eb6c18a91d43ee9795984347caea6c2fda0a2b60e930d180689edccb79a7c0eac0b5e1ab998fb7adc861944829458b07b2a2624fd0fc53c03cfa41ba23ad6e365a19e5dcd550841eec1eeb5fd6d88750785325a54d22835618950403b58efcfa26d191ab44529396a476fd02347882ae2b2ec2374fb9aff47e5d1440a5c3073b321e649085a04910150c208d46a0b60c7194d841d2ace06575fe2bb6eb90a066f6d4519d34adce262b5cd267ac198d33eb2f0537342b40ae27a3be396f06c2dc7162182714d61f2c0f03ce2e9047cbe77b8389830b9cd9d7a76253854a26300ea59d69392bf39298595382754796e72a8aff432a9368c4414e2f91f89d71f571d7d393a92cf368c9a27ce5d75d61664b05d76faf6e0df8090e672aa4536d3344ce86dbc81b38d7dbae07c95471100dcd4edff06874dd4a856be2ca7b0aad1a391157f712ed4716c779940b44be575b1edae05d4c8996b0f1c155f746159102ac4ad1ba640569db4b38f8beabac04bf473c56698bb20fc60cc6e6a5b8c354de6e86fadf190f22dddf95f31f9eff48666f82b527056519786da359b410e28a0a249b31cd3b8efbc5276d1d52a909d3f93e88800bc6aaa65edbada1b4cf1100a0a96fa9d4c6d6d9ea4004a19db72771b56c4744bc3da76aa3e43d53c7a7f461b0d436c40ad850061c7e34d722783785317cdb4db9821d067aca7ee7fe315518e017d9c3cd77eded3764acc81003daeb521f6acb0f46e74361f09217f6480db8634d0a1ef96e501edb1c464b43481571e6e07e79696929e7a5c857a9904ea12acc184d24368a3dd27df522141ca62f115e82978402280da333606b43513882dd9916c321107a37e954693c77346b98c854d1df141074bed03284f29027809508bd72378c6afeeb5111a3beb03ba613c7556a7deca8586f573ca3099859ab9bfbe0a031069ab527122aa32a6ff2ec46ef66b4f0e27ec65e96a5e0a614a089424483b0ca110620c3f644ae6c7b4b146f46e7069079e0befc36f7758193dd9cdb9afc277b2d4f1c3ccaddaf092a82de494f297c54ac845ded9f620ffa010df0fab9126f787150fcb2f6628219f69150c74eb7d68a73d148df1980707d6a85e2659e00da5f2b760b5679966d3db73b2bc6e2d6337f8c1f8b668229509acd8184635839e23d288a322217a4cf293f524fffce97483ff6c29ec632163e8bd4119ab9f3e0c9ad54ea0bc210681a29a2afd77116ebfe7a8cf8ae14d92a4487bddb0fd063be8701a396e29ebf511f2b09230e6e6bb97ee99f627c2b518c803e1a9a3c9b75914b09be6696babfe0b99e0fda25349d126043fdc643345a472e5bdd3a9a25ba40c9818fdcc9809bb5ce64ecd97ba3fccda86922fe569404658c629c193c743b10debbeafeac36ac406d39dfa00d2ae5bd3875c4a4dccd2382c45fa573d97ffd09b245998d5b76495331697f0d41f44c390130607035a4581c74f3bd07ccd8739142610c4f0d20e20d3b2e8c1f1f46fcd17d8b13921342041e8147cc1d0d54d243ff9e9cb16e3024dafaccb0e684e22e2633d6578177851cd0e608ae3dfe67ad0d54e35c6d7f6a466dd080ad32613336a62fd52fd93ca2b7d94bde96d2aff5ecc8e18d4397170dc04f0b572c41f18721d30077978bf49717058e4125e6e824b40fb5217473a21f0e09b71930ae229e859cc8efdbf21fca83c694e0e3fd4039ca3f1240dd3cbab5c7b4843aee6d0fcf99b6894ff940b96040ad59f0c65024e7fc890a6b6418aa4ad3ead5b47cbeab71eaf02a85f2b5449c8570e68802154f83952edfdd52c798f4fe6cf9e3aa99c581f02430a64cb972d01e1ad7d3e90dbf224911f24dee17ded0d523c98dc678b66d3a263508525fce72b86558b8425c071dfbb3e6828abf6a5666cc57288266bcbe23963cb5d5d685837061abcbf5cb6b2d8884b0cd3280d102e9abe4cb53fdf0f6a6b860f61bb4c33b09a0cf858d154acecd48cc63b44aa3f90816636e7393dfbad898f951fc28c83ab2ba4db9bbd7e99662db5516d418cdd0369830d68cc6dc481401f5d69c1a5f8307bc9f9591a7b034f64145db35890d4a6c4273007aa9cde23d21f79ef488a93fc62ba72e6f9a2a3b6e38fbfd1feffd970ee128ea59bf503f069570ea8734f271b9907abf80eca92f69482d9cc2d55d91fa6d801bbdcac6405ec5e5d22f16d9b113a51d6e464d2f91ff80dab6420777a080c1835dab3e9ee2405446df97d953d269401d1f334a481dac6300904a6b661c4e3a95e71b2c709a7ad13f8d9f7e8d8a4c141a2a19d3089dcae0e1e38a028e2ab3e8ade24c0895f0ed475295254ed04aa58a8dd17f8b41a92542c3e62816ec2ac532f00eecdf92bcb3ce5d56ccb59b819d97d9a9194110e8eff17489021f5fa656fadc0fdb155777dc0889fbb13e5d598c25b0b65f731226806ebf91e1324fb0dd83275eea2a5af7a50a676d11f0d5a1def4d3d6ee4b80beef76fb7433919ac96f324315ac1b512a5d23c599be27b9cc41fe6602d760e9bba3b37c9a7f668d7b3eacd882309f522ddc1c6ad39fd0cca82d0a3a4c27911beaf0d887f2b7252cf267d12917ab54a17d00870dd4604af5a2924c25a2e4b8729a59ae65926d32c6d1d8f35cece33bd67c4a964d0518aeb1bd718c535beb94f01b2b8f9887bfffcc8e13bfe3004b9f1c420ed44e741fc44646a9fe2a32e63368808ea654d1c3d9cae2c4e591bf82c15ba4ae3de1a1360453bb3f669aa34893a1d13ccca71c0c8b97a19a72b364a8d0199eb77bfa638e8efe0b386601fc669226d637d1276a192215931596da9cbebaadd22f509c2565713b75b902c420559562ef49b8ab798489f978f666a75ca07fb44251d21ac74ab8af1e58826901321d30d846315b0090d3f4006059f49e5b188092129bc7228c164ae8d75ee2722da28ba7d8b55d2b97f5c88c96333feac49987818821a17fde6ffd10c73a81851d5cde4bd949a324264b29d0765b4eef07dd44fd13ada275f3b9fe7ef2c1dce7b670aa5ad9fed60698b7bce1995c1e2a9ed86933c3a133af45245e5b8ef6b0cd34e9bc3fefdcebf0e02aa3a346c8a5dc2e11bb10832d586882564d8644876701eedde81a72e756d01777ce3549be259db52daa298f87fead15d43d9341ec2b5b8edcf03a31d4cf8825a47930cd544c788575d51c59d305bdd364ecbfea19da058bfe7cc25751f6d3505f94150b5355024836cfdf3356517fda84dff8ddb07cb26186621d0bef5fb63a7669c11f9e706d626b0dd2313067645104afce38c35ba6ea594678cae1c23a0ba2551bc5e4f05a7055f15f3d5f38dba6cd25eef6c6ab90f9804d113c1cd89b26d7be848baffc1a44f96c785e357127d2ac6503f4f0bd2e697ab198464addfa9f69d4e9e6bf15d88ff0684257afdba5a95b71baa35ea289dd9278e1ecb787fd8259953af8003e11352a3f8fee3c87209b849484493d273b45ac96991bc552a3e5ce89c4b52724e15d3ab9579d0fb549c14a503f38af9607a62cdbbae0b423e3852f8a4fb6495ec2a7c69a98d917afb9e40896002a1b5150fa9dcc30ae73f7ecddfca808bc9e279d9c1b13106110608b7d45924eb104ad60bdcacd6ae0f7f26979b86a4a98d9cefa9c2c4efb3968a62bb18550ee473beb2f3d203cd57cb7148a3dfb84761caa6da97e3674075d88e69a536103b54e97ae7bd9cad64a0cae4ce0884c59576cc29f3422f210c689558ef346a59aef41f40348690a19c3bbfb2a74ac2a679dbf556f64e97574b8815e2707fb09b6737675364e6e399bac322d3dbc2d056723bd3b1643444def7b66f244b99907b9d49ac7bae372d59bfdefb4f1cffe47ef8ff21fee01605d73461307a92e05d70a22abfa502e13544463816dfc3ca05e65bf7295a02bc1de9a31230d1113e31de8af2b952fffdc0ed006efe4bf353174c8f462e412fc34849e36510b3d3d6ce05e9905d09bcc937ace37c96e1153322f893c5e19146e1b6d7c3c7d45d260130757215bc2f0d62763320efef67c67e268387facbbe0a42117d5e696492b894541860c18f95127455c857510dced22741820ab433af7765b2fdacbf072f2022fb051fff08b30fe9c4c265479644c7684f0059197b5d42c91e91ec4523061272f4f6c86c820cdafa9a81d48e33d3f36133fb97fe6cc68605f14218a500c13f8bbc10b09e619e874bd757d32776d65f2781b5665d7d7c1b01edb581382e9d26b551849f65dc4246c4f03546264ddd7cba370d88e8bb22ae619a866f6a5d69b7a5db36031577e1429453c99ea8665e1596a41c4b8205635e481baaf6b2c63cf89c934ffc69199062ef0599c157d9af9142ed8236e3123d52e877dfe2366b640385f76d3a21352c568989ddf1f005535ba5b5ff0d7695a42a730a6d7af7ec434a61cc6ba0fb03ec771580b33b89c62f6ef92b2dc300943def60400b9bf062bfbd819704a3a2f915c3a20f58794dfdd5fb29e6be537243279d98f3828543f3c6f15e26a5422f964d25f94ff3581292a385195fb6b1ae416ec76fb4113e41f12546b5cd404bdaa4d5973c7719cfe4c36c8e380679b7f4c61b6cd10a4d42cc51d4073fdcd1842f6be270343aa0340cd351e8a10f6ae23b6659a5158b090095f98ccb4145b60099e87062b4b29a2ebe20d8731f4fa2a744aaa0e1d183b443e4d3fa9870a4fecfa6646a96ab76f81290ff1e602f1c372eae34beccae9055eb2d6a6377d93c1e8cb35458ed616e3e2be83bb0fb8d7924b081521301a7da1f2769fccb052bfee2fe943c0c630243997d388ee28f82b0f02230b1fc02af95fba478ec016edea2070490618e0dd2e6e2048527e5fdd77f86cffbc51f6937c449c74b7d5479e0b8e9f3251fcda00dc08fbd82050162437002f87d92de53c28fdfb63a509e4ff5370051869467edc4714a6da599b466bbe64e7fee91990276b155dafa164815ba606de4841cbd6dd6a48af57fc88bd2c712b134a834a96c63e9af061c1f1686ace0835470b38b2aed6048d8298db39675daa4f7bad661d7d978e855552e89cfea8cbc3a2862ab0a38797c779ab128763cbd3e66f100676a6e9704ef6d600bd7d70cd70b53a8db147bf10e547f71cf4b4e9f26d0a06c97152ce3b48c7b56c4488ba63eb2afa73ea8a88cb3a97c019653ffa025b5a708c627c4cc3ec18e7d67359e5e76dc874dcd4bc112772e2f15d5e714c3b9a314e85aeb2c707ebeec4b6328bb899e1080ac85496ba76b405e93528519956481e1d57fb926e26603e9f6d904dd04d907af24efdb7efea437bad08a95825358b7be06bfb5b86f79af4390feb400bcd28da5c9e8eb9eeaf4d62ace487ccfa3427b11f2d1774aaaf8483a343659e97937b186c83e54157246f0471a5c062ed1dde5b2e3921af5537000ec3e200f61879245541cea3ab8f150523458305a5c21938ae20a6043a5f65c5334915d2ac664216ea9b37deb119f9b8f8b2522d99161f528e4c26cc3c299f14edb9987d0d7da49db21815daf569ae0724082022a4ee7b35e8ebba24bae45ad3007bf8f5529534d9bab6c55f1670370cf4a6a8350b344fe280c2a270c0a448c9288e8ab2da398e8e8dc168e76b69b1449fb11720a6ed8dca0487e1266593aaeb1a39babe79b512de23b4fb73a306c42512769e650e2aece7a02731113c2153c145a8f00098ad45202b7d2a2e316b135d1e9faf2810a7ee205c8d3bed34840db351b28cd959e3addfb6a7b8ee452a25087c01bab0c9a320af7f24555248d92c05ec9285b73c7053e95d1aa870bc2a2944f7116234bb493c24b91877b726630a25262928ee6e641d9b51ce210118313711e321dea2ddca7b2cb80e905f8feb586d6afc3bedadcdb7b955dc29f4fdd34484891db785f062adc83fc4483142242c32bb92b68b78d89ae5fff124b159eb671e0325e89cdf5f6d84f563111fcc7397ee5a4d793437f38a8bae2874c2706c2a8c8038516c550817de6f6011a9b198801e2272218b595aa232a26f5ec51e33a2a740124cd9ec0e5f02fb05dba770873cce12c01ca92af797595fbc3ab3cb34cf06abe6e335ae3b6004a90cbe4d08af3dace58beda3b82428d3c0892f41332e55afe09330e9e26abe68c162240d05fdf0eaca3fe87637daabdc896b6fd07970c7e391b418261faee3cf6d217070d5d7cc94c154d9159af2e8f23d53b4364fa33e817bb8898ce88998579ed1c8518a3baa585a36e9a0624412cf5ed2e7e0c1dab8ecc2470358bbd33f287aa56a4ef3234ab30986cb0a24429d8482ba17a1868a57dae60f73a130b894a0e327b95e24b5a53a540dfd4e440d0b205002856b74c521f149fcb8cc2ecfa05fb9a0a15031c09be97e2b5dae38309d395a7cef8826bdd290ef181b050264f39ca052741b73d1f89557fce71d3a1"
          }
          
        ) {
          repdata
        }
      }
    `,
    {}
  );
  const accountsList: object[] = data.exportDataRecords.repdata;
  if (errors) console.log("ERROR: bad wizcloud request", errors);
  return accountsList;
}

async function getAccountsList() {
  const accountsList = {};
  await getWizcloudAccounts()
    .then((data) => {
      for (const i in data) {
        accountsList[data[i]["fullName"]] = data[i];
      }
    })
    .catch((e) => {
      console.log(e);
    });
  return accountsList;
}

export { getAccountsList };
