// ホームのURL
const homeUrl = process.env.PUBLIC_URL;
const genre_db = [
    {gender:1,type:1,name:"ウルトラマン", image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_ultraman.jpg?autoresize=on",page_url:`${homeUrl}/exercise`},
    {gender:1,type:1,name:"王様戦隊キングオージャー", genre: "王様戦隊キングオージャー", image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_kingohjya.jpg?autoresize=on"},
    {gender:1,type:1,name:"おさるのジョージ", genre: "おさるのジョージ", image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_osarunogeorge.png?autoresize=on"},
    // {gender:1,type:1,name:"仮面ライダーギーツ",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-brand_geets.jpg?autoresize=on"},
    {gender:1,type:1,name:"鬼滅の刃",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_kimetsu.png?autoresize=on"},
    // {gender:1,type:1,name:"ゴー！ゴー！びーくるずー",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_vehiclezoo.jpg?autoresize=on"},
    {gender:1,type:1,name:"ジョブレイバー",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_joblabor_v2.jpg?autoresize=on"},
    // {gender:1,type:1,name:"シンカリオンZ",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_shinkalion_v3.jpg?autoresize=on"},
    {gender:1,type:1,name:"スパイディとすごいなかまたち",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_marvel_spidey.jpg?autoresize=on"},
    // {gender:1,type:1,name:"デュエル・マスターズ",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_duel-masters.jpg?autoresize=on"},
    // {gender:1,type:1,name:"トイ・ストーリー",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_toystory_202207.jpg?autoresize=on"},
    // {gender:1,type:1,name:"トランスフォーマー",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_transformer.png?autoresize=on"},
    {gender:1,type:1,name:"ナーフ",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_nerf_v2.jpg?autoresize=on"},
    {gender:1,type:1,name:"パウ・パトロール",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_pawpatrol_v2.png?autoresize=on"},
    {gender:1,type:1,name:"ベイブレードバースト",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_beyblade-burst.jpg?autoresize=on"},
    {gender:2,type:1,name:"L.O.L.サプライズ！",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_lol.png?autoresize=on"},
    {gender:2,type:1,name:"すみっコぐらし",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_sumikko.png?autoresize=on"},
    {gender:2,type:1,name:"ディズニープリンセス",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_disneyprincess.png?autoresize=on"},
    {gender:2,type:1,name:"ひろがるスカイ！プリキュア",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_spreading-sky_precure.jpg?autoresize=on"},
    {gender:2,type:1,name:"Pretty Holic",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_prettyholic.jpg?autoresize=on"},
    // {gender:2,type:1,name:"ベイビーシャーク",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_babyshark.jpg?autoresize=on"},
    // {gender:2,type:1,name:"ぽぽちゃん",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_popochan_v3.jpg?autoresize=on"},
    // {gender:2,type:1,name:"メルちゃん",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_mellchan.png?autoresize=on"},
    {gender:2,type:1,name:"リカちゃん",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_rika-chan.jpg?autoresize=on"},
    // {gender:2,type:1,name:"リズスタ Top of Artists!",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_rizsta.jpg?autoresize=on"},
    // {gender:2,type:1,name:"レインボーコーンズ",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_rainbocorns.png?autoresize=on"},
    // {gender:2,type:1,name:"レミン＆ソラン",image_url:"https://www.toysrus.co.jp/static/top/img/character/logo-character_reminsolan.png?autoresize=on"},
    {gender:1,type:2,name:"アニア",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_ania_v2.gif"},
    // {gender:1,type:2,name:"クリエーションネーション",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_creationnation.png?autoresize=on"},
    {gender:1,type:2,name:"シュライヒ",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_schleich_v2.jpg?autoresize=on"},
    // {gender:1,type:2,name:"スピードシティー",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_speedcity.png?autoresize=on"},
    // {gender:1,type:2,name:"タカラトミー",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_takaratomy.png?autoresize=on"},
    // {gender:1,type:2,name:"ディズニー",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_disney.png?autoresize=on"},
    // {gender:1,type:2,name:"TOPPS",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_topps.png?autoresize=on"},
    {gender:1,type:2,name:"トミカ",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_tomica.png?autoresize=on"},
    {gender:1,type:2,name:"ナーフ",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_nerf_v2.jpg?autoresize=on"},
    {gender:1,type:2,name:"バンダイ",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_bandai.png?autoresize=on"},
    {gender:1,type:2,name:"プラレール",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_plarail.png?autoresize=on"},
    // {gender:1,type:2,name:"フレンズフォーライフ",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_friendsforlife.png?autoresize=on"},
    // {gender:1,type:2,name:"ホットウィール",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_hotwheel.png?autoresize=on"},
    // {gender:1,type:2,name:"Mattel Games",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_mattel_games_v2.jpg?autoresize=on"},
    {gender:1,type:2,name:"レゴ(R)ブロック",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_lego.png?autoresize=on"},
    {gender:2,type:2,name:"アクアビーズ",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_aquabeads.png?autoresize=on"},
    {gender:2,type:2,name:"シルバニアファミリー",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_sylvanianfamiles.png?autoresize=on"},
    // {gender:2,type:2,name:"タイ",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_ty.jpg?autoresize=on"},
    // {gender:2,type:2,name:"ディズニー",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_disney.png?autoresize=on"},
    {gender:2,type:2,name:"パーラービーズ",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_perlerbeads.png?autoresize=on"},
    // {gender:2,type:2,name:"パチェリエ",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_pacherie.png?autoresize=on"},
    // {gender:2,type:2,name:"ハペ",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_hape.png?autoresize=on"},
    {gender:2,type:2,name:"ベビーブラッシュ",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_babyblush.png?autoresize=on"},
    // {gender:2,type:2,name:"My Story",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_mystory_v2.jpg?autoresize=on"},
    {gender:2,type:2,name:"レゴ(R)ブロック",image_url:"https://www.toysrus.co.jp/static/top/img/brand/logo-brand_lego.png?autoresize=on"},    ];

export default genre_db;

