export function reveal(node: HTMLElement, { delay = 0, duration = 500, y = 12 } = {}) {
    node.style.opacity = '0';
    node.style.transform = `translateY(${y}px)`;
    node.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                node.style.opacity = '1';
                node.style.transform = 'translateY(0)';
                observer.unobserve(node);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '30px'
    });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}

export function revealLeft(node: HTMLElement, { delay = 0, duration = 500, x = 20 } = {}) {
    node.style.opacity = '0';
    node.style.transform = `translateX(-${x}px)`;
    node.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                node.style.opacity = '1';
                node.style.transform = 'translateX(0)';
                observer.unobserve(node);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '30px'
    });

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}
