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
	// components
	import Navbar from "./components/Navbar/Navbar.svelte";
	import Sidebar from "./components/Navbar/Sidebar.svelte";
</script>

<Router>
	<Navbar />
	<Sidebar />
	<Route path="/" component={Home} />
	<Route path="/about" component={About} />
	<Route path="/login" component={Login} />
	<Route path="/products" component={Products} />
	<Route path="/products/:id" component={ProductTemplats} />
</Router>
