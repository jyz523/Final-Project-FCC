import * as React from 'react';

function WebCode() {
    // State for the selected option in the dropdown
    const [selectedOption, setSelectedOption] = React.useState('');
    // State to track search term
    const [searchTerm, setSearchTerm] = React.useState('');
    // State for storing sushi, dessert, and drink items
    const [sushiItems, setSushiItems] = React.useState([]);
    const [dessertItems, setDessertItems] = React.useState([]);
    const [drinkItems, setDrinkItems] = React.useState([]);
    // State for shopping cart, total price, and cart visibility
    const [cartItems, setCartItems] = React.useState([]);
    const [totalPrice, setTotalPrice] = React.useState(0);
    const [isCartVisible, setIsCartVisible] = React.useState(false);
    const [paymentStatus, setPaymentStatus] = React.useState('');


    const containerStyle = {
        width: '100vw',
        height: '100vh',
        background: 'url("/allsushi.jpeg") no-repeat center center',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const rectangleStyle = {
        border: 'none',
        width: '80%',
        height: '70%',
        backgroundColor: '#FFDAD6',
        display: 'flex',
        flexDirection: 'column' as 'column', // Explicitly setting the type
        alignItems: 'flex-start',
        paddingLeft: '20px',
    };


    const wrapperStyle = {
        display: 'flex',
        flexWrap: 'wrap' as 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    };

    // New item style for child elements in wrapper
    const itemStyle = {
        display: 'flex',
        alignItems: 'center',
        margin: '10px',
        flexBasis: 'calc(25% - 20px)', // Adjust for 3 items per row, modify as needed
    };

    const searchBoxStyle = {
        marginTop: '20px',
        padding: '10px',
        width: '70%',
        marginLeft: '0px',
        alignSelf: 'flex-start',
    };

    const selectBoxStyle = {
        padding: '10px',
        width: '17.5%',
    };

    const sushiData = [
        { name: 'Salmon Nigiri', image: '/salmon.jpeg',price: '60' }, // Assuming images are in the public folder
        { name: 'Tuna Nigiri', image: '/tuna.jpeg',price: '40' },
        { name: 'Amaebi', image: '/Amaebi.png',price: '40' }, // Assuming images are in the public folder
        { name: 'Ebi', image: '/Ebi.png',price: '40' },
        { name: 'Hamachi', image: '/Hamachi.png',price: '40' },
        { name: 'Hotate', image: '/Hotate.png',price: '40' },
        { name: 'Ika', image: '/Ika.png',price: '40' },
        { name: 'Ika Sugata', image: '/Ikasugata.png',price: '40' },
        { name: 'Pink Shrimp', image: '/Pinkshrimp.png',price: '40' },
        { name: 'Tako', image: '/Tako.png',price: '40' },
        { name: 'Shimesaba', image: '/Shimesaba.png',price: '40' },
        { name: 'Hokkigai', image: '/Hokkigai.png',price: '40' },
        { name: 'Tsubugai', image: '/Tsubugai.png',price: '40' },
        { name: 'Megane', image: '/Megane.png',price: '40' },
        { name: 'Unatama', image: '/Unatama.png',price: '40' },
        { name: 'Engawa', image: '/Engawa.png',price: '40' },
        { name: 'Salmon & Avocado', image: '/Salmonavocado.png',price: '40' },
        { name: 'Smoked Salmon', image: '/Smokedsalmon.png',price: '40' },
        { name: 'Marinated Tuna', image: '/Marinatedtuna.png',price: '40' },
        { name: 'Combo', image: '/Temari.png',price: '40' },

        // Add more sushi items here...
    ];

    const dessertData = [
        { name: 'Chocolate Mousse', image: '/chocolate_mousse.jpg',price: '100' }, // Assuming images are in the public folder
        { name: 'Chocolate Mousse', image: '/chocolatemoussed.png',price: '100' },
        { name: 'Gelato(Green Tea)', image: '/Gelato.png',price: '50' },
        { name: 'Gelato(Mango)', image: '/Gelatos.png',price: '50' },
        { name: 'Jelly', image: '/Jelly.png',price: '40' },
        { name: 'Green Tea roll cake', image: '/Greentearollcake.png',price: '80' },
        { name: 'Taiyaki', image: '/Taiyaki.png',price: '80' },
        { name: 'Tiramisu', image: '/Tiramisu.png',price: '$00' },
        { name: 'Caramel Custard', image: '/Caramelcustard.png',price: '100' },
        { name: 'Gelato(banana)', image: '/Gelatoyo.png',price: '50' },
        { name: 'Blueberry Cheesecake', image: '/Blueberry.png',price: '100' },
        { name: 'Caramel Custard', image: '/Caramelcustards.png',price: '80' },
        { name: 'Chocolate Fondant', image: '/Chocolatefondant.png',price: '40' },


        // Add more dessert items here...
    ];

    const drinkData = [
        { name: 'Coke', image: '/coke.jpg',price: '50' },
        // Add more drink items here...
    ];

    // Style for the shopping cart
    const cartStyle = {
        position: 'fixed',
        right: isCartVisible ? '0' : '-400px',
        top: '0',
        width: '400px',
        height: '100vh',
        backgroundColor: 'white',
        padding: '20px',
        boxSizing: 'border-box' as 'border-box', // Explicitly setting the type
        transition: 'right 0.5s ease-in-out',
        zIndex: 1000,
    };

    // Function to handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    // Function to handle selection change
    const handleSelectionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        setSearchTerm(''); // Reset search term on category change

        switch (value) {
            case 'Sushi':
                setSushiItems(sushiData);
                setDessertItems([]);
                setDrinkItems([]);
                break;
            case 'Dessert':
                setDessertItems(dessertData);
                setSushiItems([]);
                setDrinkItems([]);
                break;
            case 'Drink':
                setDrinkItems(drinkData);
                setSushiItems([]);
                setDessertItems([]);
                break;
            default:
                setSushiItems([]);
                setDessertItems([]);
                setDrinkItems([]);
        }
    };

    // Function to get filtered items based on the search term
    const getFilteredItems = () => {
        let items = [];
        if (selectedOption === 'Sushi') {
            items = sushiItems;
        } else if (selectedOption === 'Dessert') {
            items = dessertItems;
        } else if (selectedOption === 'Drink') {
            items = drinkItems;
        }

        if (searchTerm) {
            items = items.filter(item => item.name.toLowerCase().includes(searchTerm));
        }
        return items;
    };

    // Function to add item to cart
    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
        setTotalPrice(prevTotal => prevTotal + item.price);
        setPaymentStatus(''); // Reset payment status when new item is added

    };

// Function to remove item from cart
    const removeFromCart = (indexToRemove) => {
        const itemToRemove = cartItems[indexToRemove];
        const newCartItems = cartItems.filter((_, index) => index !== indexToRemove);
        setCartItems(newCartItems);
        setTotalPrice(prevTotal => prevTotal - parseFloat(itemToRemove.price)); // Adjust total price
        setPaymentStatus(''); // Reset payment status when an item is removed
    };

    // Function to toggle cart visibility
    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    const handlePayment = () => {
        // Simulate a payment process
        const isPaymentSuccessful = Math.random() > 0.3; // 50% chance of success

        if (isPaymentSuccessful) {
            setPaymentStatus(`Payment successful! Ordered Number: ${Math.floor(Math.random() * 1000000)}`);
            setCartItems([]); // Clear cart after successful payment
            setTotalPrice(0);
            // Additional logic for successful payment
        } else {
            setPaymentStatus('Payment failed! Order cancelled.');
        }
    };

    const handleDone = () => {
        // Reset the payment status and potentially other states
        setPaymentStatus('');
        // Navigate back to the homepage
        window.location.href = 'http://localhost:3000/'; // Replace with your homepage URL if different
    };

    // Function to reset payment status and return to homepage
    const resetPaymentStatus = () => {
        setPaymentStatus('');
        // Potentially navigate back to the homepage or reset UI state
    };

    const searchAndToggleStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    };

    const toggleButtonStyle = {
        marginLeft: '15px',
        padding: '10px 20px', // Increase padding for a wider button
        fontSize: '14px',
        cursor: 'pointer',
        marginTop: '20px',
        whiteSpace: 'nowrap', // Ensure text doesn't wrap
        // Add more styling as needed
    };

    return (
        <div style={containerStyle}>
            {paymentStatus === 'Payment failed! Order cancelled.' ? (
                <div style={rectangleStyle}>
                    <p>{paymentStatus}</p>
                    <button onClick={resetPaymentStatus}>Return to Homepage</button>
                </div>
            ) : (
                <div style={rectangleStyle}>
                    <div style={searchAndToggleStyle}>
                        <input
                            type="text"
                            placeholder="Search menu..."
                            style={searchBoxStyle}
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button onClick={toggleCartVisibility} style={toggleButtonStyle}>Show order list</button>
                    </div>

                    <select style={selectBoxStyle} onChange={handleSelectionChange}>
                        <option value="">Select Category</option>
                        <option value="Sushi">Sushi</option>
                        <option value="Drink">Drink</option>
                        <option value="Dessert">Dessert</option>
                    </select>

                    {/* Render filtered items with updated style */}
                    <div style={wrapperStyle}>
                        {getFilteredItems().map((item, index) => (
                            <div key={index} style={itemStyle}>
                                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                                <span>{item.name} - ${item.price}</span>
                                <button onClick={() => addToCart(item)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>

                    <div style={cartStyle}>
                        <h2>Your Cart</h2>
                        {cartItems.map((item, index) => (
                            <div key={index}>
                                <p>{item.name} - ${item.price}</p>
                                <button onClick={() => removeFromCart(index)}>Remove</button>
                            </div>
                        ))}
                        <h3>Total: ${totalPrice}</h3>
                        {paymentStatus.startsWith('Payment successful!') ? (
                            <div>
                                <p>{paymentStatus}</p>
                                <button onClick={handleDone}>Done</button>
                            </div>
                        ) : (
                            <button onClick={handlePayment} disabled={!cartItems.length}>Checkout and Pay</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default WebCode;