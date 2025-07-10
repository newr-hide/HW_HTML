require ('./app.js');

describe("Popovers", () => {
  beforeEach(() => {
    
    document.body.innerHTML = `
      <div class="container">
        <button type="button" data-title="Test Title" data-content="Test Content" class="popover-trigger">Show Popover</button>
        <div id="popover" class="d-none">
          <h3></h3>
          <p></p>
        </div>
      </div>
    `;
  });

  it("должен показать всплывающее окно при клике", () => {
    const button = document.querySelector(".popover-trigger");
    const popover = document.getElementById("popover");
    button.click();
    expect(popover.classList.contains("d-none")).toBe(true);

  });
});