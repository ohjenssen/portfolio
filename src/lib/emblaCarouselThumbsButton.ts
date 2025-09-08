import type { EmblaCarouselType } from 'embla-carousel';

export const addThumbBtnsClickHandlers = (
  emblaApiMain: EmblaCarouselType,
  emblaApiThumb: EmblaCarouselType
) => {
  const slidesThumbs = emblaApiThumb.slideNodes();

  const scrollToIndex = (index: number) => {
    emblaApiMain.scrollTo(index);
  };

  const onClick = (index: number) => {
    return () => scrollToIndex(index);
  };

  slidesThumbs.forEach((slide, index) => {
    const button = slide.querySelector('button');
    if (button) {
      button.addEventListener('click', onClick(index), false);
    }
  });

  return () => {
    slidesThumbs.forEach((slide, index) => {
      const button = slide.querySelector('button');
      if (button) {
        button.removeEventListener('click', onClick(index), false);
      }
    });
  };
};

export const addToggleThumbBtnsActive = (
  emblaApiMain: EmblaCarouselType,
  emblaApiThumb: EmblaCarouselType
) => {
  const slidesThumbs = emblaApiThumb.slideNodes();

  const toggleThumbBtnsState = () => {
    const selectedIndex = emblaApiMain.selectedScrollSnap();
    slidesThumbs.forEach((slide, index) => {
      if (index === selectedIndex) {
        slide.classList.add('embla-thumbs__slide--selected');
      } else {
        slide.classList.remove('embla-thumbs__slide--selected');
      }
    });
  };

  emblaApiMain.on('select', toggleThumbBtnsState);
  emblaApiMain.on('init', toggleThumbBtnsState);

  return () => {
    emblaApiMain.off('select', toggleThumbBtnsState);
    emblaApiMain.off('init', toggleThumbBtnsState);
  };
};