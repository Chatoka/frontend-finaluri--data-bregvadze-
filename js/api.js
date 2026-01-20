const testimonialsContainer = document.querySelector(".testimonials-grid");

async function fetchTestimonials() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let imageResponse = await fetch("https://picsum.photos/60");

    if (!response.ok) {
      throw new Error("Server Error");
    }

    let data = await response.json();

    const testimonials = data.slice(0, 3);

    if (testimonialsContainer) {
      testimonialsContainer.innerHTML = "";

      testimonials.forEach((user) => {
        const testimonialCard = document.createElement("article");
        testimonialCard.className = "testimonial-card";
        testimonialCard.innerHTML = `
          <i class="fas fa-quote-right quote-icon"></i>
          <div class="testimonial-header">
            <div class="testimonial-image">
              <div class="image-placeholder small"><img src="${imageResponse.url}" alt="Profile image random"></div>
            </div>
            <div class="testimonial-info">
              <h4>${user.name}</h4>
              <p>${user.address.city}</p>
            </div>
          </div>
          <p class="testimonial-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et hendrerit in.</p>
        `;
        testimonialsContainer.appendChild(testimonialCard);
      });
    }
  } catch (error) {
    console.error("Error fetching testimonials:", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  fetchTestimonials();
});
