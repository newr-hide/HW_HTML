document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.popover-trigger');
    const popover = document.getElementById('popover');
    const titleElement = popover.querySelector('h3');
    const contentElement = popover.querySelector('p');
    
    let isPopoverShown = false;

    button.addEventListener('click', () => {
        if (!isPopoverShown) {
            showPopover();
        } else {
            hidePopover();
        }
    });

    function showPopover() {
        titleElement.textContent = button.dataset.title || '';
        contentElement.textContent = button.dataset.content || '';
        
        const rect = button.getBoundingClientRect(); 
        
        
        popover.classList.remove('d-none');// чтобы посчитать height
        const height = popover.offsetHeight;
        popover.classList.add('d-none');
        
        
        popover.style.top = `${rect.top + window.scrollY - height - 10}px`;
        popover.style.left = `${rect.left + window.scrollX}px`;
        popover.classList.remove('d-none'); 
        isPopoverShown = true;
    }

    function hidePopover() {
        popover.classList.add('d-none'); 
        isPopoverShown = false;
    }
});