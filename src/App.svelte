<script>
	// Import the required components
	import Login from "./pages/Login.svelte";
	import Products from "./pages/Products.svelte";
	import ProductTemplats from "./pages/ProductTemplate.svelte";
	import Checkout from "./pages/Checkout.svelte";
	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";

	// Import the necessary routing components
	import { Router, Route, Link } from "svelte-routing";
</script>

<Router>
	<nav class="navbar">
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/products">Products</Link>
		<!-- <Link to="/producte/5">Prod 5</Link>
		<Link to="/producte/7">Prod 7</Link> -->
	</nav>
    <Route path="/" component={Home} />
	<Route path="/about" component={About} />
	<Route path="/login" component={Login} />
	<Route path="/products" component={Products} />
	<Route path="/products/:id" component={ProductTemplats} />
</Router>
