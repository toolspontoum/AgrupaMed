function solutionsDropdown() {

    const solutionDropdown = document.querySelectorAll('.js-solutions-dropdown');

    if (solutionDropdown.length > 0) {
        
        solutionDropdown.forEach((section) => {
            const solutionLinks = section.querySelectorAll('.js-solutions-dropdown-item');

            solutionLinks.forEach((solution) => {
                const solutionClose = solution.querySelector('.js-solutions-dropdown-close');

                solution.addEventListener('click', (e) => {

                    if (!solution.classList.contains('is-open')) {
                        solution.classList.add('is-open');
                    }
                });

                solutionClose.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (solution.classList.contains('is-open')) {
                        solution.classList.remove('is-open');
                    }
                });
            });

        });


    }

}

solutionsDropdown();
