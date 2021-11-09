const btnsFilter = document.querySelectorAll('.filter');
const listProduct = document.querySelectorAll('.post_item');
for (let i = 0; i < btnsFilter.length; i++) {
    btnsFilter[i].addEventListener("click", (e) => {
        e.preventDefault();
        const filterData = e.target.dataset.filter;
        console.log(filterData);

        listProduct.forEach((product) => {
            if (filterData == "all") {
                product.style.display = "block";
            } else {
                if (product.classList.contains(filterData)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            }
        })
    })
}