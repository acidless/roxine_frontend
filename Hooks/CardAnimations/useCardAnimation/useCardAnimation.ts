function useCardAnimation(
  element: HTMLElement,
  onStart?: Function,
  onFinish?: Function
) {
  if (element) {
    onStart && onStart(false);

    const animation = element.animate(
      [
        {
          transform: "rotateY(0deg)",
        },
        {
          transform: "rotateY(180deg)",
        },
      ],
      {
        duration: 300,
        iterations: 1,
      }
    );

    animation.addEventListener("finish", () => {
      onFinish && onFinish(true);
    });

    return animation;
  }
}

/*====================*/

export default useCardAnimation;
