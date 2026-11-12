// const buttons = document.querySelectorAll('.gallery-menu button');

// const images = document.querySelectorAll('.gallery-item');

// buttons.forEach(button => {

//     button.addEventListener('click', () => {

//         // Remove active class from all buttons
//         buttons.forEach(btn => {
//             btn.classList.remove('active');
//         });

//         // Add active class to clicked button
//         button.classList.add('active');

//         // Get selected category
//         const filter = button.dataset.filter;

//         // Display matching images
//         images.forEach(image => {

//             if (filter === 'all' || image.classList.contains(filter)) {
//                 image.classList.add('show');
//             } else {
//                 image.classList.remove('show');
//             }

//         });

//     });

// });


// const filterButtons = document.querySelectorAll(".filter-btn");

// const galleryItems = document.querySelectorAll(".gallery-item");

// filterButtons.forEach(button => {

//     button.addEventListener("click", () => {

//         // Get the selected category
//         const selectedCategory = button.getAttribute("data-filter");

//         // Remove active class from all buttons
//         filterButtons.forEach(btn => {
//             btn.classList.remove("active");
//         });

//         // Add active class to clicked button
//         button.classList.add("active");

//         // Filter the gallery images
//         galleryItems.forEach(item => {

//             const itemCategory = item.getAttribute("data-category");

//             if (
//                 selectedCategory === "all" ||
//                 selectedCategory === itemCategory
//             ) {
//                 item.classList.remove("hide");

//                 // Restart the animation
//                 item.style.animation = "none";
//                 item.offsetHeight;
//                 item.style.animation = "";
//             } 
//             else {
//                 item.classList.add("hide");
//             }

//         });

//     });

// });


// const filterButtons = document.querySelectorAll(".filter-btn");
// const galleryItems = document.querySelectorAll(".gallery-item");

// filterButtons.forEach(button => {

//     button.addEventListener("click", function () {

//         // Get selected category
//         const selectedCategory = this.dataset.filter;

//         // Update active button
//         filterButtons.forEach(btn => {
//             btn.classList.remove("active");
//         });

//         this.classList.add("active");

//         // Display matching images
//         galleryItems.forEach(item => {

//             const itemCategory = item.dataset.category;

//             if (selectedCategory === "all" || selectedCategory === itemCategory) {

//                 item.style.display = "block";

//             } else {

//                 item.style.display = "none";

//             }

//         });

//     });

// });




const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Get selected category
        const selectedCategory = this.dataset.filter.toLowerCase();

        // Update active button
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        // Filter gallery images
        galleryItems.forEach(item => {

            const imageCategory = item.dataset.category.toLowerCase();

            if (
                selectedCategory === "all" ||
                selectedCategory === imageCategory
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


