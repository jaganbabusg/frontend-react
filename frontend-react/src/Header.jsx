import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (<>
        <header className="position-relative text-white">
            {/* Background Image */}
            <img
                src="../images/banner.jpg"
                alt="banner"
                className="img-fluid w-100"
                style={{ height: '60vh', objectFit: 'cover' }}
            />
            {/* Text Overlay */}
            <div className="position-absolute top-50 start-50 translate-middle text-center">
                <h3>LIFE IS BETTER WHEN WE</h3>
                <h2>DINE TOGETHER</h2>
                <p>
                    Have your favourite Hyderabad Biryani for dine-in, to-go,
                    or delivered to your home
                </p>
            </div>
        </header>
    </>);
}

{/* // export default function Header() {
//     return (<>
//         <header class="">
//             <div class="header-top-cls">
//                 <div class="container-full">
//                     <div class="logo-main-section">
//                         <div class="menu_icon trigger_menunav_act">
//                             <span class="icon-bar icon-bar1"></span>
//                             <span class="icon-bar icon-bar2"></span>
//                             <span class="icon-bar icon-bar3"></span>
//                         </div>
//                         <div class="mobile-login">
//                             <a href="#" class="controller-nav"></a>
//                             <ul class="mobile-login-list">
//                                 <li>
//                                     <a href="#login-popup" data-effect="mfp-zoom-in" class="open-popup-link htico_sign" title="Login">
//                                         <span>Login</span>
//                                     </a>
//                                     <a href="#signup-popup" data-effect="mfp-zoom-in" class="open-popup-link" title="Sign up">
//                                         <span>Sign Up</span>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div class="mobile-menu">
//                             <div class="mobile-menu-header">
//                                 <div class="mobile-menu-close">
//                                     <span id="close_mobile_menu"></span>
//                                 </div>
//                             </div>
//                             <div class="mobile-menu-body">
//                                 <ul class="menu">
//                                     <li class="">
//                                         <a title="Home" target="" href="/">
//                                             <span>Home</span>
//                                         </a>
//                                     </li>
//                                     <li class="">
//                                         <a title="About Us" target="" href="/about-us">
//                                             <span>About Us</span>
//                                         </a>
//                                     </li>
//                                     <li class="active">
//                                         <a title="Menu" target="" href="/products">
//                                             <span>Menu</span>
//                                         </a>
//                                     </li>
//                                     <li class="">
//                                         <a title="Events" target="" href="/events">
//                                             <span>Events</span>
//                                         </a>
//                                     </li>
//                                     <li class="">
//                                         <a title="Contact Us" target="" href="/locations">
//                                             <span>Contact Us</span>
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                         <div class="logo">
//                             <a title="Mr Biryani" href="/">
//                             </a>
//                         </div>
//                         <div class="hmenu_sec">
//                             <ul class="hmenu_list desktop_hmenu_list">
//                                 <li class="">
//                                     <a title="Home" target="" href="/">
//                                         <span>Home</span>
//                                     </a>
//                                 </li>
//                                 <li class="">
//                                     <a title="About Us" target="" href="/about-us">
//                                         <span>About Us</span>
//                                     </a>
//                                 </li>
//                                 <li class="active">
//                                     <a title="Menu" target="" href="/products">
//                                         <span>Menu</span>
//                                     </a>
//                                 </li>
//                                 <li class="">
//                                     <a title="Events" target="" href="/events">
//                                         <span>Events</span>
//                                     </a>
//                                 </li>
//                                 <li class="">
//                                     <a title="Contact Us" target="" href="/locations">
//                                         <span>Contact Us</span>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div class="hmenu-login-section">
//                             <ul class="hmenu-login-act">
//                                 <li class="hsign_sec">
//                                     <a href="#login-popup" data-effect="mfp-zoom-in" class="open-popup-link htico_sign" title="Login">
//                                         <span>Login</span>
//                                     </a>
//                                     <span>|</span>
//                                     <a href="#signup-popup" data-effect="mfp-zoom-in" class="open-popup-link" title="Sign up">
//                                         <span>Sign Up</span>
//                                     </a>
//                                 </li>
//                                 <li class="hordertype_sec">
//                                     <a href="/" class="hordertype_btn home-btn" title="Delivery">Delivery
//                                         <span class="header-arrow header-mbl-arrow"></span>
//                                     </a>
//                                 </li>
//                                 <li class="htico_search">
//                                     <a href="/" class="hsearch_trigger" title="Search"></a>
//                                     <div class="hsearch_sec">
//                                         <div class="input-sec">
//                                             <input type="text" name="searchkey" class="productsearch" id="productsearch_desktop" placeholder="Search...">
//                                                 <a href="/" id="clearSearch" class="search_text_clear disbl_href_action">X</a>
//                                         </div>
//                                         <ul class="search_result" id="search_result">
//                                             <li>
//                                                 <a title="Product Details" href="/products/all-time-celebration/all-time-celebration/chander-festive-menu-148">$148++</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/all-time-celebration/all-time-celebration/chander-festive-menu-198">$198++</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/all-time-celebration/all-time-celebration/chander-festive-menu-398">$398++</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/vegetarian/chander-plain-curd">Plain Curd</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/vegetarian/chander-onion-salad">Onion Salad</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/vegetarian/chander-raita">Raita</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/vegetarian/chander-gobi-manchurian">Gobi Manchurian</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/vegetarian/chander-paneer-tikka">Paneer Tikka</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/vegetarian/chander-andhra-chilli-paneer">Andhra Chilli Paneer</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/vegetarian/chander-chinese-chilli-paneer">Chinese Chilli Paneer</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/non-vegetarian/chander-gongura-fish-fry">Chander - Gongura Fish fry</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/non-vegetarian/chander-chicken-malai-tikka">Chander - Chicken Malai Tikka</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/non-vegetarian/chander-tandoori-tiger-prawns">Tandoori Tiger Prawns</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/non-vegetarian/chander-fish-tikka">Fish Tikka</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/non-vegetarian/chander-half-tandoori-chicken">Half Tandoori Chicken</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/non-vegetarian/chander-chicken-tikka">Chicken Tikka</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/non-vegetarian/chander-andhra-mutton-fry">Andhra Mutton Fry</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/non-vegetarian/chander-apollo-fish">Apollo Fish</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/non-vegetarian/chander-chinese-chilli-fish">Chinese Chilli fish</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/non-vegetarian/chander-andhra-chilli-chicken">Andhra Chilli Chicken</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/non-vegetarian/chander-crispy-chicken-65">Crispy Chicken 65</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/starters/non-vegetarian/chander-andhra-prawn-fry">FAndhra Prawn Fry</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/mr-biryani-gift-pack/mr-biryani-gift-sets/chander-family-sized-gift-pack-3-4-pax">Family-Sized Gift Pack (3-4 pax)</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/mr-biryani-gift-pack/mr-biryani-gift-sets/chander-couple-gift-pack-1-2-pax">Couple Gift Pack (1-2 pax)</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/naan/chander-plain-naan">Plain Naan</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/naan/chander-garlic-naan">Garlic Naan</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/naan/chander-butter-naan">Butter Naan</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/naan/chander-cheese-naan">Cheese Naan</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/naan/chander-cheese-garlic-naan">Cheese Garlic Naan</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/naan/chander-kashmiri-naan">Kashmiri Naan</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/naan/chander-tandoori-roti">Tandoori Roti</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/dal-curry/chander-cabbage-dal-fry">Chander - Cabbage Dal Fry</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/dal-curry/chander-dal-tadka">Dal Tadka</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/dal-curry/chander-chana-masala">Chana Masala</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/paneer-vegetable-dishes/chander-vegetable-kurma">Vegetable Kurma</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/paneer-vegetable-dishes/chander-kadai-vegetable">Kadai Vegetable</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/paneer-vegetable-dishes/chander-bhindi-palli-fry">Bhindi Palli Fry</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/paneer-vegetable-dishes/chander-brinjal-pachadi">Brinjal Pachadi</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/paneer-vegetable-dishes/chander-brinjal-masala">Brinjal Masala</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/paneer-vegetable-dishes/chander-palak-paneer">Palak Paneer</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/paneer-vegetable-dishes/chander-kadai-paneer">Kadai Paneer</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/paneer-vegetable-dishes/chander-paneer-butter-masala">Paneer Butter Masala</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/paneer-vegetable-dishes/chander-gongura-paneer">Gongura Paneer</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander-andhra-fish-curry">Chander - Andhra Fish Curry</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander-andhra-prawn-curry">Chander - Andhra Prawn Curry</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander-butter-chicken-masala">Butter Chicken Masala</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander-gongura-chicken">Gongura Chicken</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander--andhra-chicken-masala">Andhra Chicken Masala</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander-mutton-masala">Mutton Masala</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander-gongura-mutton">Gongura Mutton</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander-mutton-kofta-curry">Mutton Kofta Curry</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander-mutton-kurma">Mutton Kurma</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander-mutton-keema-masala">Mutton Keema Masala</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander-gongura-tiger-prawn">Gongura Tiger Prawn</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander-tiger-prawn-masala">Tiger Prawn Masala</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander-fish-goan-curry">Fish Goan Curry</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/non-vegetarian-dishes/chander-fish-masala">Fish Masala</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/tandoor-curry/eggs/chander-egg-omelette">Egg Omelette</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/special-set-packages/family-couple-packages/chander-mr-biryani-family-pack">Family Pack</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/special-set-packages/family-couple-packages/chander-mr-biryani-couple-pack">Couple Pack</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-plain-dhum-biryani">Plain Dhum Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-gongura-paneer-biryani">Chander - Gongura Paneer Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-gongura-mutton-keema-biryani">Chander - Gongura Mutton Keema Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-gongura-prawn-biryani">Chander - Gongura Prawn Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-gongura-fish-biryani">Chander - Gongura Fish Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-gongura-mutton-biryani">Chander - Gongura Mutton Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-gongura-chicken-biryani">Chander- Gongura Chicken Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-egg-biryani">Chander - Egg Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-paneer-tikka-biryani">Chander - Paneer Tikka Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-fried-chicken-65-biryani">Chander - Fried Chicken 65 Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-vegetable-biryani">Vegetable Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-jack-fruit-dhum-biryani">Jack Fruit Dhum Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-brinjal-biryani">Brinjal Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-paneer-biryani">Paneer Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/boneless-mutton-biryani">Boneless Mutton Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-lamb-shank-biryani">Lamb Shank Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/mutton-kofta-biryani">Mutton Kofta Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-keema-mutton-biryani">Keema Mutton Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-fish-tikka-biryani">Fish Tikka Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/boneless-fish-biryani">Boneless Fish Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/prawn-biryani">Prawn Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-boneless-chicken-biryani">Boneless Chicken Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/biryani/biryani/chander-hyderabad-chicken-dhum-biryani">Hyderabad Chicken Dhum Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/festive-menu/festive-menu/chander-all-time-festive-148">$148+</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/festive-menu/festive-menu/chander-all-time-festive-198">$198+</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/festive-menu/festive-menu/chander-all-time-festive-398">$398+</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/dessert/dessert/chander-homemade-coconut-candy-6pcs">Homemade Coconut Candy 6pcs</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/dessert/dessert/chander-homemade-coconut-candy-24pcs">Homemade Coconut Candy 24pcs</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/dessert/dessert/chander-chocolate-brawnies">Chocolate Brawnies 1 pc 2x 2 inch</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/dessert/dessert/chander-gulab-jamun">Gulab Jamun</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/dessert/dessert/chander-black-lentil-paste">Black Lentil Paste - Uluthang Kanji</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-dhum-biryani-rice">Tray Dhum Biryani Rice</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-vegetable-biryani">Tray Vegetable Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-brinjal-dhum-biryani">Tray Brinjal Dhum Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-paneer-biryani">Tray Paneer Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-jackfruit-biryani">Tray Jackfruit Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-hyderabad-chicken-dhum-biryani">Tray Hyderabad Chicken Dhum Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-boneless-chicken-biryani">Tray Boneless Chicken Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-tandoori-chicken-biryani">Tray Tandoori Chicken Biryani 14pcs</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-boneless-mutton-masala-biryani">Tray Boneless Mutton Masala  Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-lamb-hind-shank-biryani">Tray Lamb Hind Shank Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-lamb-kofta-biryani">Tray Lamb Kofta Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-keema-mutton-biryani">Tray Keema Mutton Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-boneless-fish-biryani">Tray Boneless Fish Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-fish-tikka-biryani">Tray Fish Tikka Biryani 18pcs</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/biryani-trays-5-pax/chander-tray-tiger-prawn-biryani-18pcs">Tray Tiger Prawn Biryani</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/veg-big-gobi-manchurian">Big Gobi Manchurian 750g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/veg-big-bhindi-palli-fry">Big Bhindi Palli Fry 500g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/veg-big-brinjal-pachadi">Big Brinjal Pachadi 680g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/veg-big-bhindi-masala">Big Bhindi Masala 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/veg-big-brinjal-masala">Big Brinjal Masala 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/veg-big-kadai-vegetable">Big Kadai Vegetable 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/veg-big-vegetable-kurma">Big Vegetable Kurma 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/paneer-big-andhra-chilli-paneer">Big Andhra Chilli Paneer 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/paneer-big-paneer-tikka">Big Paneer tikka 15pcs</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/paneer-big-palak-paneer">Big Palak Paneer 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/paneer-big-paneer-butter-masala">Big Paneer Butter Masala 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/paneer-big-kadai-paneer">Big Kadai Paneer 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/paneer-big-gongura-paneer">Big Gongura Paneer 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/dal-big-dal-tadka">Big Dal Tadka 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/dal-big-channa-masala">Big Channa Masala 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/vegetarian-side-dishes-5-pax/dal-big-vegetable-dalcha">Big Vegetable Dalcha 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/seafood-big-tandoori-tiger-prawn">Big Tandoori Tiger prawn 18pcs</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/seafood-andra-prawn-fry">Big - Andra Prawn fry 15pcs</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/seafood-big-gongura-tiger-prawn">Big Gongura Tiger Prawn 15pcs</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/seafood-big-tiger-prawn-masala">Big Tiger Prawn Masala 15pcs</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/seafood-fish-tikka">Big - Fish Tikka 18 pcs</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/seafood-big-appolo-fish">Big Appolo Fish - 680g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/seafood-big-chinese-chilli-fish">Big Chinese chilli Fish</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/seafood-big-fish-goan-curry">Big Fish Goan Curry 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/seafood-big-fish-masala">Big Fish Masala 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/mutton-big-andhra-mutton-fry">Big Andhra Mutton Fry 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/mutton-big-keema-mutton-masala">Big Keema Mutton Masala 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/mutton-big-mutton-masala">Big Mutton Masala 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/chander-big-tandoori-chicken">Big Tandoori Chicken 10pcs</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/chicken-big-chicken-tikka">Big Chicken Tikka 20pcs</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/chicken-big-andhra-chilli-chicken">Big Andhra Chilli Chicken 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/chicken-big-chinese-chilli-chicken">Big - Chinese Chilli Chicken 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/chicken-big-boneless-butter-chicken">Big Boneless Butter Chicken - 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/chicken-big-boneless-chicken-65">Big Boneless Chicken 65 -  30pcs</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/chicken-big-boneless-gongura-chicken">Big Boneless Chicken Gongura  780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/chicken-big-boneless-chicken-masala">Big Boneless Chicken Masala 780g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/desseert-gulab-jamun">Gulab Jamun</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/dessert-big-pack-masala-chai-2-5-litre">Chander - Big Pack Masala Chai 2.5 litre</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/dessert-kaseri">Big Kaseri 800g</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/party-menu/non-vegetarian-side-dishes-5-pax/dessert-urad-dal-puding">Dessert - Urad Dal -Uluthang Kanji</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/beverages/beverages/chander-iced-lime-tea">Iced Lime Tea</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/beverages/beverages/2-5-litre-masala-chai">2.5 Litre Masala Chai</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/beverages/lassi/chander-mango-lassi">Mango Lassi</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/beverages/lassi/chander-butter-milk">Butter Milk</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/beverages/lassi/chander-masala-tea">Masala Tea</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/beverages/lassi/chander-plain-sweet">Plain Sweet</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/beverages/soft-drinks/chander-coke">Coke</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/beverages/soft-drinks/chander-sprite">Sprite</a>
//                                             </li>
//                                             <li>
//                                                 <a title="Product Details" href="/products/beverages/soft-drinks/chander-bottle-water">Bottle Water</a>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </li>
//                                 <li class="htico_wishlish">
//                                     <a class="wishlish" title="Wishlist"></a>
//                                 </li>
//                                 <li class="htico_cart">
//                                     <a class="hcartdd_trigger" title="Cart" href="">
//                                         <img src="/static/media/shopping-bag.11bd3b2d.svg" alt="">
//                                             <span class="hcart_round">0</span>
//                                     </a>
//                                     <input type="hidden" id="totalitmcount" value="0">
//                                 </li>
//                                 <li>
//                                     <div class="hcart_dropdown">
//                                         <div class="hcart_tt">
//                                             <div id="cart-close-span">
//                                             </div>
//                                             <h3>YOUR ORDER DETAILS</h3>
//                                         </div>
//                                         <div class="hcart_scrollarea">
//                                             <div class="cart_body">
//                                                 <div class="del_address">
//                                                     <h5>Delivery Address</h5>
//                                                     <div class="form-group">
//                                                         <div class="input_field">
//                                                             <input type="text" id="postal_code" placeholder="Postal Code" class="form-control" readonly="" value="730504">
//                                                         </div>
//                                                     </div>
//                                                     <div class="form-group">
//                                                         <div class="input_field">
//                                                             <input type="text" placeholder="Address Line 1" class="form-control" readonly="" value="504 WOODLANDS DRIVE 14">
//                                                         </div>
//                                                     </div>
//                                                     <div class="form-group half-fg">
//                                                         <div class="input_field">
//                                                             <input type="text" placeholder="Unit Number 1" class="form-control" name="unit_no1" value="">
//                                                         </div>
//                                                         <div class="input_field">
//                                                             <input type="text" placeholder="Unit Number 2" class="form-control" name="unit_no2" value="">
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div class="cartaction_bottom" style="top: 100dvh; transform: translateY(-58px);">
//                                                 <a class="button btn_pink cartaction_checkout" title="Checkout Now" href="/checkout">Checkout Now</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="mobile-order-nowbtn">
//                 <a href="/" class="hordertype_btn home-btn" title="Delivery">Delivery
//                     <span class="header-arrow header-mbl-arrow"></span>
//                 </a>
//             </div>
//             <div class="custom_alertcls alert-success alert-dismissible1 alert_fixed success_hide" id="jquery-success-msg" style="display: none;">
//                 <a href="/" type="button" class="custom_close" data-dismiss="alert" aria-label="Close">
//                     <span aria-hidden="true">×</span>
//                 </a>
//                 <p class="jquery-success-msg">Nice! Products added to your cart</p>
//             </div>
//             <div class="custom_alertcls alert-danger single-danger alert-dismissible alert_fixed error_hide" id="jquery-error-msg" style="display: none;">
//                 <a href="/" class="custom_close" data-dismiss="alert" aria-label="Close">
//                     <span aria-hidden="true">×</span>
//                 </a>
//                 <p class="jquery-error-msg">Something went wrong</p>
//             </div>
//             <div class="custom_center_alertcls alert-success alert-dismissible1 alert_fixed success_hide" id="jquery-common-success-msg" style="display: none;">
//                 <a href="/" type="button" class="custom_close" data-dismiss="alert" aria-label="Close">
//                     <span aria-hidden="true">×</span>
//                 </a>
//                 <p class="jquery-common-success-msg">Nice! Products added to your cart</p>
//             </div>
//             <div class="custom_center_alertcls alert-danger single-danger alert-dismissible alert_fixed error_hide" id="jquery-common-error-msg" style="display: none;">
//                 <a href="/" class="custom_close" data-dismiss="alert" aria-label="Close">
//                     <span aria-hidden="true">×</span>
//                 </a>
//                 <p class="jquery-common-error-msg">Something went wrong</p>
//             </div>
//             <div id="login-popup" class="white-popup mfp-hide popup_sec login-popup">
//                 <div class="pop-whole">
//                     <div class="pop-whole-lhs">
//                         <div class="pop-whole-lhs-inner">
//                             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAB4CAYAAAAE9le0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEQ3MjI4Q0M3MUJFMTFFQjhBNUJGMTQ5MEUzOUVDOEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEQ3MjI4Q0Q3MUJFMTFFQjhBNUJGMTQ5MEUzOUVDOEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RDcyMjhDQTcxQkUxMUVCOEE1QkYxNDkwRTM5RUM4QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RDcyMjhDQjcxQkUxMUVCOEE1QkYxNDkwRTM5RUM4QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkkJkAcAAA8dSURBVHja7F0JlBXF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" alt="Login">
//                                 <h3>Login</h3>
//                                 <p>Update your information and continue</p>
//                         </div>
//                     </div>
//                     <div class="inside-popup-rhs">
//                         <div class="popup-header guest_checkout_text textcenter">
//                             <span class="display_block text-center">Continue As</span>
//                             <a href="#guest-popup" class="btn guest_checkout guest_btn open-popup-link">
//                                 <i class="fa fa-user-o" aria-hidden="true"></i>
//                                 Guest Checkout
//                             </a>
//                         </div>
//                         <div class="or-seperator">
//                             <span>Or</span>
//                         </div>
//                         <div class="popup-header textcenter">
//                             <h4>Enter Your Information</h4>
//                         </div>
//                         <div class="popup-body">
//                             <span class="spn-error"></span>
//                             <div class="form-group">
//                                 <div class="focus-out">
//                                     <label>Enter Mobile Number</label>
//                                     <input type="tel" maxlength="8" id="mobile" class="form-control input-focus" value="">
//                                         <p></p>
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="focus-out">
//                                     <label>Enter Your Password</label>
//                                     <input type="password" class="form-control input-focus" value="">
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="login_pop_sub">
//                                     <button class="button btn_black btn_minwid login_submit"> Submit </button>
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="controls two-links">
//                                     <a href="#signup-popup" data-effect="mfp-zoom-in" class="open-popup-link">Create an account</a>
//                                     <span class="spilter"> </span>
//                                     <a href="#forgot-password-popup" data-effect="mfp-zoom-in" class="open-popup-link">Forgot Password</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="guest-popup" class="white-popup mfp-hide popup_sec guest-popup">
//                 <div class="pop-whole">
//                     <div class="pop-whole-lhs">
//                         <div class="pop-whole-lhs-inner">
//                             <h3>Sign Up</h3>
//                             <p>Create Your Account with us.</p>
//                         </div>
//                     </div>
//                     <div class="inside-popup-rhs">
//                         <span class="display_block guest_checkout_text text-center">Continue As</span>
//                         <a href="#guest-popup" class="btn guest_btn guest_checkout open-popup-link ">
//                             <i class="fa fa-user-o" aria-hidden="true"></i> Guest Checkout
//                         </a>
//                         <div class="or-seperator">
//                             <span>Or</span></div>
//                         <div class="popup-body"><h4>Enter Your Information</h4>
//                             <div class="form-group">
//                                 <div class="focus-out">
//                                     <label>Name</label>
//                                     <input type="text" class="form-control input-focus" value="">
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="focus-out">
//                                     <label>Enter Mobile Number</label>
//                                     <input type="tel" maxlength="8" class="form-control input-focus" pattern="\d*" value="">
//                                         <div id="spn-mobile-error"></div>
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="focus-out">
//                                     <label>Email Address</label>
//                                     <input type="text" class="form-control input-focus" value="">
//                                         <div id="spn-email-error"></div>
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="focus-out">
//                                     <label>password</label>
//                                     <input type="password" class="form-control input-focus" value="">
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="focus-out">
//                                     <label>Confirm password</label>
//                                     <input type="password" class="form-control input-focus" value="">
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="custom_checkbox custom_checkbox_content">
//                                     <input type="checkbox" id="terms"> <span></span>
//                                         <div class="sign_reg">
//                                             <p>I agree with Mr Biryani,&nbsp;<a class="sign_reg_uline" href="terms-of-use">Terms &amp; Conditions.</a></p>
//                                         </div>
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="login_pop_sub">
//                                     <button type="button" class="button btn_black btn_minwid signup_submit">Submit</button>
//                                 </div>
//                             </div>
//                             <div class="form-group-11">
//                                 <div class="controls single-link">
//                                     <a href="#login-popup" class="open-popup-link">Back to login</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="forgot-password-popup" class="white-popup mfp-hide popup_sec login-popup forgot-password-popup">
//                 <div class="pop-whole">
//                     <div class="pop-whole-lhs">
//                         <div class="pop-whole-lhs-inner">
//                             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAB4CAYAAAAE9le0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEQ3MjI4Q0M3MUJFMTFFQjhBNUJGMTQ5MEUzOUVDOEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEQ3MjI4Q0Q3MUJFMTFFQjhBNUJGMTQ5MEUzOUVDOEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RDcyMjhDQTcxQkUxMUVCOEE1QkYxNDkwRTM5RUM4QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RDcyMjhDQjcxQkUxMUVCOEE1QkYxNDkwRTM5RUM4QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkkJkAcAAA8dSURBVHja7F0JlBXF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" alt="Forgot your Password">
//                                 <h3>Forgot your Password?</h3>
//                                 <p>You can reset your Password here.</p>
//                         </div>
//                     </div>
//                     <div class="inside-popup-rhs">
//                         <div class="popup-header textcenter">
//                             <h4>
//                                 <img src="/static/media/logo.88eb62b3.png">
//                             </h4>
//                         </div>
//                         <div class="popup-body">
//                             <div class="form-group">
//                                 <div class="focus-out">
//                                     <label>Email Address</label>
//                                     <input type="email" class="form-control input-focus" value="">
//                                         <div>Please click Forgot Password to set a Password for the login.</div>
//                                         <div id="form-msg"></div>
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="login_pop_sub">
//                                     <button type="button" class="button btn_black btn_minwid forgotpassword-cls">Get Reset Link</button>
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="controls single-link">
//                                     <a href="#login-popup" class="open-popup-link">Back to login</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="change-password-popup" class="white-popup mfp-hide popup_sec changepw_popup">
//                 <div class="pouup_in"><div id="form-msg"></div>
//                     <h3 class="title1 text-center">Change Password</h3>
//                     <div class="popup-body">
//                         <form class="form_sec">
//                             <div class="form-group">
//                                 <div class="focus-out">
//                                     <label>Current Password</label>
//                                     <input type="password" class="form-control input-focus old_password">
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="focus-out">
//                                     <label>New Password</label>
//                                     <input type="password" class="form-control input-focus new_password">
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="focus-out">
//                                     <label>Re-enter New Password</label>
//                                     <input type="password" class="form-control input-focus confirm_password">
//                                 </div>
//                             </div>
//                             <div class="form-group">
//                                 <div class="login_pop_sub change-pass-sbmt">
//                                     <button type="button" class="button btn_black btn_minwid">Submit</button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <div id="order-popup" class="white-popup mfp-hide popup_sec order_popup">
//                 <div class="order-body">
//                     <h2>Order Now</h2>
//                     <p>Select your order type</p>
//                     <div class="order_delivery_row">
//                         <div class="order_delivery_col">
//                             <ul class="order_delivery_item">
//                                 <li>
//                                     <a href="/" class="ordericon_link active">
//                                         <div class="header-ordernow-single-img">
//                                             <img class="order_type_img" src="/static/media/delivery.ab2e648c.svg">
//                                                 <h3>Delivery</h3>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="/" class="ordericon_link ">
//                                         <div class="header-ordernow-single-img">
//                                             <img class="order_type_img" src="/static/media/takeaway.b26093e1.svg">
//                                                 <h3>Takeaway</h3>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="/" class="ordericon_link ">
//                                         <div class="header-ordernow-single-img resveration-img">
//                                             <img class="order_type_img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAABDCAYAAAAvSg1YAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjU3RkYyNDgwNEJFMTFFQ0FCMTVFNUFDNzExQTgwMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjU3RkYyNDkwNEJFMTFFQ0FCMTVFNUFDNzExQTgwMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NTdGRjI0NjA0QkUxMUVDQUIxNUU1QUM3MTFBODAyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NTdGRjI0NzA0QkUxMUVDQUIxNUU1QUM3MTFBODAyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjtfnZoAAAaeSURBVHja7Ft7aJZV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">
//                                                 <h3>Reservation</h3>
//                                         </div>
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="delevery-redirect-popup" class="white-popup mfp-hide popup_sec delivery_redirect_popup">
//                 <div class="order_delivery_row">
//                     <div class="order_delivery_col">
//                         <ul class="order_delivery_item">
//                             <li>
//                                 <a class="redirect_button" href="https://www.bungkus.sg/en/store/Mr-Biryani-Chander-Rd/1176754" target="_blank">Chander Road (Real Time Orders)</a>
//                             </li>
//                             <li>
//                                 <a class="redirect_button" href="https://www.bungkus.sg/en/store/Mr-Biryani-Norris-Rd/653556" target="_blank">Norris Road (Real Time Orders)</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div id="delevery-popup" class="white-popup mfp-hide popup_sec delivery_outletpoup self_popup">
//                 <div class="order-body">
//                     <div class="self_popup_hea_row">
//                         <div class="self_popup_hea_col_left">
//                             <img class="outlet-scooter-img" src="/static/media/delivery.ab2e648c.svg">
//                         </div>
//                         <div class="self_popup_hea_col">
//                             <h2>Please Select</h2>
//                             <p>Your Delivery Outlet</p>
//                         </div>
//                     </div>
//                     <div class="self_pop_row">
//                         <div class="self_pop_col self_pop_col_right">
//                             <div class="self_pop_item">
//                                 <div class="self_outlet">
//                                     <h2>Nearby Outlets</h2>
//                                     <ul class="self_outlet_inner">
//                                         <li class="active">
//                                             <a href="/">Mr Biryani 11 Chander Road, 11, CHANDER ROAD, Singapore 219529</a>
//                                         </li>
//                                     </ul>
//                                     <a class="button disbl_href_action" id="delivery-continue-link" href="/">Continue</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="delevery-postcode-popup" class="white-popup mfp-hide popup_sec delevery_popup">
//                 <div class="popup_equalrw">
//                     <div class="popup_ttsec">
//                         <div class="innervmid_in">
//                             <div class="pop_title">
//                                 <img class="pop-scooter-img" src="/static/media/delivery.ab2e648c.svg">
//                                     <h2 class="text-uppercase">Let us know</h2>
//                                     <small>Your Delivery Location</small>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="popup_right">
//                         <div class="innervmid_in">
//                             <div class="form-group">
//                                 <div class="focus-out">
//                                     <label>Enter your postal code</label>
//                                     <input type="text" id="postalcode" pattern="\d*" maxlength="6" class="form-control input-focus">
//                                         <div class="postal_error">
//                                         </div>
//                                 </div>
//                             </div>
//                             <div class="btn_sec">
//                                 <div class="two-button-row">
//                                     <div class="go_second"><a href="/" class="button button-left disbl_href_action" title="Go Back">Go Back</a>
//                                     </div>
//                                     <div class="con_first delivery_submit_cls">
//                                         <input type="button" class="button button-right delivery_submit" value="Continue">
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="error-postal-popup" class="white-popup mfp-hide popup_sec error_postal_popup">
//                 <div class="popup_equalrw">
//                     <div class="popup_ttsec">
//                         <div class="innervmid_in">
//                             <div class="pop_title poptt_icontop text-center">
//                                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAAzCAYAAAAtg6DjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNBMUMzNzI4NUY4QTExRUFCNjg4QzcyMjZFOTgwQTgyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNBMUMzNzI5NUY4QTExRUFCNjg4QzcyMjZFOTgwQTgyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0ExQzM3MjY1RjhBMTFFQUI2ODhDNzIyNkU5ODBBODIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0ExQzM3Mjc1RjhBMTFFQUI2ODhDNzIyNkU5ODBBODIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BZ2/CAAADzUlEQVR42uyaTUgVURTH5z00S1OjMpJSSzPsSzDogywKyoW06NOCkCDLhGwptalFlFAgFIQkLWvRRgrJyIoIbFebsjKVJFPLStPQsvzI6X+Y82Aaxjcfd2be0+YPv4Xw7pn7n+e799xzbkCWZUmjdLAHFILlIAEMg3bwENSBVilyygG7QAHIAvHgJ2gD98Ed0PnPCDKp4ihokcPrAyjXjPOKk6DTYH40/xL1OHWAs2BCNq/LIOiROXrOFQtzIx9ntCZLLRoM6ZRHJk/bmNsfcCxkMh10yPY0CFa4bJDiD9mcH/lKD+JnWQQybC4CieC4ywtNGZhtcyz5KgryKiqiHWCmSwZnge2CMQrJZLZgkPm87bihNJAiGGNZ0IFvIYb3UjeUwPGF/huCvNGLaBwMuWTyBxgTjDEc5ExBRF9Al0smKXP5KhijlUzWCwZpACMumRzhVE1E9aF9ss3mPtQPslzeJyn+gM35tYK0UKCDYMxGRuFVDlvOz7Mi8nNAm7tWWAx0HsR6ZJKec8HiF1Chl6ATReCVQYB3fFqJxCmEctF2g/k1gf3qcQGd8+RcsI8zjaWcutFS3gGegtvgYwTPk4vAXrAFLOGUj7aw9+AxqAUD6gF6JtWax8kCrXLf6PgpRY8CPL848Jvnp/9BA5PTQkHpP5Bv0jfpm/RN+iZ9k75J36RvclooxqW4sZJSM03lk8ICPsLF8zMnuEr4nQtVfeAz6HageuiqSSowbwUbwBo2SOaSTZYee9noW/AcNIIWfiFiZzLBo1YGH66pabsZzHHwpVFj9YWkNFWpIvjGa5N5oBjsBpke/Kz6wQNw01aJ0mKNJRNUg145MvoFGkABCJidt1lzSdwI7ZGjQ9QwvgFWO2VyPXgkR6e6zNR+jQyWClSvvdQt7gRYMjkDXJKnlqhevFHPj97qSiW+a+DIFExuKKkoAXfDbSHU9Kzh7WGqahAclpRLVbomT4BqBx9IfcvXknKDq4f3OyoEU2E4SVJa5ZRQrASrJOc61t2ceX3SpnVUbi9z4AHNvHFT37OJ3+yowRgyt1BSSv90pSxfErsrsBgcAlXaZCDHRvtOrSegGCQ70NjJBZUmrpiFU63e6pprM1gbm0t0oYuVzRnWuI151euZTAHdFnuA10GqBy27ndySs6IqPZN0Se+qyQBDEbgpmQbqTM5vFKybLBnINPHG+vjNRqIJS0lKjQmTlUYZT16YO6/PQH6EDKpb6+cmuVQ4DC6COKOMh0Qd5nKwjZd3urV8T1K6uL1RsulvkpTLj2v575c8v0btB/8KMAASQT28IvoF7AAAAABJRU5ErkJggg==">
//                                     <h2 class="text-uppercase">Sorry </h2>
//                                     <small>We cant find your postal code</small>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="popup_right">
//                         <div class="innervmid_in">
//                             <form class="form_sec">
//                                 <div class="form-group">
//                                     <div class="focus-out">
//                                         <label>Enter your postal code</label>
//                                         <input type="text" id="postalcode1" pattern="\d*" maxlength="6" class="form-control input-focus">
//                                             <div class="postal_error">
//                                             </div>
//                                     </div>
//                                 </div>
//                                 <div class="btn_sec delivery_submit_cls delivery_submit_div">
//                                     <input type="button" class="button delivery_submit" value="Continue">
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="awesome-popup" class="white-popup mfp-hide popup_sec delevery_popup delevery_popup_datetime">
//                 <div class="popup_equalrw">
//                     <div class="popup_ttsec">
//                         <div class="innervmid_in">
//                             <div class="pop_title">
//                                 <img class="pop-scooter-img" src="/static/media/icon-win.3f19ad73.svg">
//                                     <h2 class="text-uppercase">Awesome</h2>
//                             </div>
//                             <div class="awesome_del">
//                                 <h5>Your Pickup location Is :</h5>
//                                 <h2></h2>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="popup_right">
//                         <div class="innervmid_in">
//                             <div class="datetime_selt_sec">
//                                 <div class="datetime_selt_lbl">Select Your Pickup Date &amp; Time</div>
//                                 <div>
//                                     <div class="timeslot_info_main">
//                                         <div class="syd_merge">
//                                             <div class="syd_date">
//                                                 <div class="form-group222">
//                                                     <input type="text" readonly="" class="form-control" placeholder="dd/mm/yyyy">
//                                                 </div>
//                                             </div>
//                                             <div class="syd_time delivery_submit_cls">
//                                                 <div class="form-group222">
//                                                     <input type="text" readonly="" class="form-control" placeholder="hh:mm">
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="ordrdatetime_error">
//                                 </div>
//                             </div>
//                             <div class="btn_sec">
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="awesome-popup-old" class="white-popup mfp-hide awesome_popup">
//                 <div class="popup_equalrw">
//                     <div class="popup_ttsec">
//                         <div class="innervmid_in">
//                             <div class="pop_title poptt_icontop text-center">
//                                 <h2 class="text-uppercase">Awesome</h2>
//                                 <small>We can Deliver !</small>
//                             </div>
//                             <div class="awesome_del">
//                                 <h5>Your Delivery Address :</h5>
//                                 <h2></h2>
//                             </div>
//                             <div class="btn_sec">
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="outlet-error-popup" class="white-popup mfp-hide popup_sec warning_popup outlet_error_popup">
//                 <div class="custom_alert">
//                     <div class="custom_alertin">
//                         <div class="alert_height">
//                             <div class="alert_body">
//                                 <h2 class="text-uppercase">Sorry</h2>
//                                 <p>We can`t Deliver At the Moment!</p>
//                                 <p>Please come back again.</p>
//                                 <div class="alt_btns">
//                                     <a href="/" class="button button-right popup-modal-dismiss disbl_href_action">change address</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="takeaway-popup" class="white-popup mfp-hide popup_sec self_popup">
//                 <div class="order-body">
//                     <div class="self_popup_hea_row">
//                         <div class="self_popup_hea_col_left">
//                         </div>
//                         <div class="self_popup_hea_col">
//                             <h2>Please Select</h2>
//                             <p>Your Self Collection Outlet</p>
//                         </div>
//                     </div>
//                     <div class="self_pop_row">
//                         <div class="self_pop_col self_pop_col_right">
//                             <div class="self_pop_item">
//                                 <div class="self_outlet">
//                                     <h2>Nearby Outlets</h2>
//                                     <ul class="self_outlet_inner">
//                                         <li class="">
//                                             <a href="/">Mr Biryani 11 Chander Road, 11, CHANDER ROAD, Singapore 219529</a>
//                                         </li>
//                                     </ul>
//                                     <a class="button takeaway-btn-act disbl_href_action" id="takeaway-continue-link" href="/">Continue</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="comingsoon-popup" class="white-popup mfp-hide popup_sec comingsoon_popup">
//                 <div class="order-body">
//                     <div class="comingsoon_popup_hea_row">
//                         <div class="comingsoon_popup_hea_col">
//                             <h2>COMING SOON.</h2>
//                         </div>
//                     </div>
//                     <div class="comingsoon_pop_row">
//                         <p> can you select another availability.</p>
//                         <a href="/" class="button disbl_href_action" title="Go Back">Go Back</a>
//                     </div>
//                 </div>
//             </div>
//             <div id="warning-popup" class="white-popup mfp-hide popup_sec warning_popup">
//                 <div class="custom_alert">
//                     <div class="custom_alertin">
//                         <div class="alert_height">
//                             <div class="alert_header">Warning</div>
//                             <div class="alert_body">
//                                 <p>By switching you are about to clear your cart.</p>
//                                 <p>Do you wish to proceed ?</p>
//                                 <div class="alt_btns"><a href="/" class="popup-modal-dismiss button button-left disbl_href_action">No</a>
//                                     <a href="/" class="button button-right popup-modal-dismiss disbl_href_action">Yes</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="mbl-menu-overly">
//             </div>
//         </header>
//     </>);
// } */}
