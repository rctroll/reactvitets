interface BoardProps {
  color: string;
}

const Board = ({ color }: BoardProps) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.7099 5.70275C12.9206 3.72668 14.593 2.1875 16.625 2.1875H25.375C27.407 2.1875 29.0794 3.72668 29.2901 5.70275C30.6257 5.72993 31.7804 5.799 32.7664 5.98011C34.0929 6.22377 35.2218 6.68794 36.1404 7.60657C37.1937 8.65992 37.6468 9.98621 37.8586 11.5614C38.0626 13.0786 38.0625 15.0077 38.0625 17.4009V28.093C38.0625 30.4863 38.0626 32.4153 37.8586 33.9325C37.6468 35.5077 37.1937 36.834 36.1404 37.8873C35.087 38.9407 33.7608 39.3938 32.1856 39.6055C30.6684 39.8095 28.7393 39.8095 26.346 39.8095H15.654C13.2607 39.8095 11.3316 39.8095 9.81444 39.6055C8.23925 39.3938 6.91297 38.9407 5.85961 37.8873C4.80626 36.834 4.3532 35.5077 4.14142 33.9325C3.93744 32.4153 3.93746 30.4863 3.9375 28.093V17.4009C3.93746 15.0076 3.93744 13.0786 4.14142 11.5614C4.3532 9.9862 4.80626 8.65992 5.85961 7.60657C6.77824 6.68794 7.90712 6.22377 9.23362 5.98011C10.2196 5.799 11.3743 5.72993 12.7099 5.70275ZM12.7133 8.32848C11.4567 8.35533 10.4883 8.41856 9.70786 8.56192C8.71594 8.74412 8.14181 9.03668 7.71577 9.46273C7.23143 9.94706 6.91565 10.6271 6.74301 11.9112C6.56529 13.233 6.5625 14.985 6.5625 17.497V27.997C6.5625 30.5089 6.56529 32.2609 6.74301 33.5827C6.91565 34.8669 7.23143 35.5469 7.71577 36.0312C8.2001 36.5155 8.88011 36.8313 10.1642 37.004C11.4861 37.1817 13.238 37.1845 15.75 37.1845H26.25C28.762 37.1845 30.5139 37.1817 31.8358 37.004C33.1199 36.8313 33.7999 36.5155 34.2842 36.0312C34.7686 35.5469 35.0844 34.8669 35.257 33.5827C35.4347 32.2609 35.4375 30.5089 35.4375 27.997V17.497C35.4375 14.985 35.4347 13.233 35.257 11.9112C35.0844 10.6271 34.7686 9.94706 34.2842 9.46272C33.8582 9.03668 33.2841 8.74412 32.2921 8.56192C31.5117 8.41856 30.5433 8.35533 29.2867 8.32848C29.0618 10.2895 27.3963 11.8125 25.375 11.8125H16.625C14.6037 11.8125 12.9382 10.2895 12.7133 8.32848ZM16.625 4.8125C15.9001 4.8125 15.3125 5.40013 15.3125 6.125V7.875C15.3125 8.59987 15.9001 9.1875 16.625 9.1875H25.375C26.0999 9.1875 26.6875 8.59987 26.6875 7.875V6.125C26.6875 5.40013 26.0999 4.8125 25.375 4.8125H16.625ZM15.6969 20.1781C15.1844 19.6655 15.1844 18.8345 15.6969 18.322C16.2095 17.8094 17.0405 17.8094 17.5531 18.322L21 21.7689L24.4469 18.322C24.9595 17.8094 25.7905 17.8094 26.3031 18.322C26.8156 18.8346 26.8156 19.6656 26.3031 20.1781L22.8562 23.6251L26.303 27.0719C26.8156 27.5845 26.8156 28.4155 26.303 28.9281C25.7905 29.4406 24.9594 29.4406 24.4469 28.9281L21 25.4812L17.5531 28.9281C17.0406 29.4407 16.2095 29.4407 15.697 28.9281C15.1844 28.4156 15.1844 27.5845 15.697 27.072L19.1439 23.6251L15.6969 20.1781Z"
        fill={color}
      />
    </svg>
  );
};

export { Board };
