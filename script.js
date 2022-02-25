const api_url = "https://fe-assignment.vaimo.net/";

async function getproduct() {

	// Making an API call (request)
	// and getting the response back
	const response = await fetch(api_url);

	// Parsing it to JSON format
	const data = await response.json();
	console.log(data.product);

	// Retrieving data from JSON
	const product = data.product;
	let image = product.gallery[0].main;
	let image_icon = product.gallery[0].main;
	let readytoship = product.shipping.props.ready_to_ship;
	let instock = product.shipping.props.in_stock;
	let fastdispatch = product.shipping.props.fast_dispatch;
	let name = product.name;
	let tags = product.tags;
	let rating = product.reviews.rating;
	let reviews = product.reviews.count;
	document.querySelector("#reviews").textContent = reviews;
	let srating = rating;
	document.querySelector("#srating").textContent = srating;
	let total_buyers = product.reviews.total_buyers;
	document.querySelector("#total_buyers").textContent = total_buyers;
	let discount = product.discount.amount;
	let end_date = product.discount.end_date;
	document.getElementById("discount").innerHTML = discount;
	document.getElementById("end_date").innerHTML = end_date;
	let options = product.options;



	// Creating a new image element and appending it
	// to previously created containers
	let img = document.createElement("img");
	let img_div = document.getElementById("product-img");
	img.src = image;
	img_div.append(img);

	document.getElementById("name").innerHTML = name;
	document.querySelector("#tags").textContent = tags;
	show(data);

	if (readytoship, instock, fastdispatch) {
		document.getElementById("readytoship").innerHTML = "Ready To Ship";
		document.getElementById("instock").innerHTML = "&#10003; In Stock";
		document.getElementById("fastdispatch").innerHTML = "&#10003; Fast Dispatch";
	}

		// Function to define innerHTML for HTML table
	function show(options) {
	    let tab = 
	        `<tr>
	          <th>Options</th>
	          <th>Office</th>
	          <th>Position</th>
	          <th>Salary</th>
	         </tr>`;
	    
	    // Loop to access all rows 
	    for (let r of product) {
	        tab += `<tr> 
	    <td>${r.label} </td>
	    <td>${r.value}</td>
	    <td></td> 
	    <td></td>          
	</tr>`;
	    }
	    // Setting innerHTML as tab variable
	    document.getElementById("options").innerHTML = tab;
	}

	
}

// Calling the function
getproduct();
//initial Design to include product image slide
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);
