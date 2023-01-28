import { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = () => {

        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos)
        setPrevScrollPos(currentScrollPos);
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [prevScrollPos, visible, handleScroll])

    return (
        <header class="duration-700 ease-in-out fixed top-0 w-full aspect-[16.3617021] bg-lightGrey flex items-center z-[1] " style={{top: visible ? '0' : '-6.1197vw'}} >
            <Link to={"/"}>
                <svg class=" w-[15.2470741vw] ml-[4.42708vw] " viewBox="0 0 237 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.3018 32.9297C20.3728 33.041 19.4157 33.429 18.6113 34.1096L18.608 34.1118V34.1123L4.44141 46.1187C5.35526 48.3248 6.51319 50.4217 7.89354 52.3702C8.03367 52.1872 8.52625 51.8409 8.52625 51.8409L16.9728 44.7011C16.5246 43.6032 16.2955 42.4025 16.4932 41.0324C17.3358 35.1935 21.2029 33.0724 21.2029 33.0724C21.2029 33.0724 21.3701 32.9591 21.3017 32.9298L21.3018 32.9297ZM7.86402 52.4161C7.85294 52.4365 7.84643 52.4543 7.85346 52.4657C7.86455 52.4839 7.91589 52.5431 7.93374 52.5682C7.90859 52.5339 7.86985 52.4859 7.85557 52.4625C7.84881 52.4517 7.85563 52.4344 7.86396 52.4161H7.86402ZM8.20364 52.9141C8.44837 53.2158 8.73564 53.5647 8.95417 53.859C8.96499 53.8735 9.00216 53.9105 9.01544 53.9271C8.99759 53.9051 8.97029 53.8747 8.95628 53.8558C8.74565 53.5722 8.44491 53.2108 8.20364 52.9141V52.9141ZM9.4554 54.4157C9.47758 54.4388 9.48265 54.4474 9.50558 54.4712C11.0319 56.2871 12.7553 57.9276 14.6442 59.3626C14.8249 59.5287 15.1211 59.8015 15.1211 59.8015C15.1211 59.8015 15.1268 59.8062 15.1268 59.8062C15.1268 59.8054 15.1295 59.8046 15.1306 59.8035C15.1305 59.8035 15.1233 59.7983 15.1233 59.7983C15.1233 59.7983 10.9928 56.0202 9.45547 54.4157L9.4554 54.4157Z" stroke="#484848" stroke-width="3" />
                    <path d="M2 33.9978C2.00058 25.5117 5.37188 17.3734 11.3724 11.3728C17.3729 5.37214 25.5112 2.00071 33.9973 2C42.4834 1.9993 50.6223 5.36937 56.6238 11.369C62.6253 17.3686 65.998 25.5064 66 33.9925C66.002 42.4786 62.6332 50.6179 56.6345 56.6204C50.6358 62.6228 42.4985 65.9967 34.0124 66C25.5263 66.0033 17.3864 62.6357 11.3831 56.6379C5.37972 50.6401 2.00457 42.5033 2 34.0172" stroke="#484848" stroke-width="3" />
                    <path d="M41.4887 25.5438C40.3801 25.5221 39.1678 25.9388 38.1852 26.7715L26.8741 36.3574L24.1538 33.7411C22.8285 32.4664 20.3552 32.632 18.6084 34.1124L4.44141 46.1183C6.84332 51.9885 10.9355 57.0125 16.1983 60.5524C21.4611 64.0922 27.6572 65.9883 33.9997 65.9999C40.4296 65.9955 46.709 64.0541 52.0194 60.4289C57.3299 56.8037 61.4251 51.6628 63.7713 45.6763L43.7306 26.4003C43.1508 25.8426 42.351 25.5606 41.4887 25.5438V25.5438Z" stroke="#484848" stroke-width="3" />
                    <path d="M40.7455 25.5829C40.7455 25.5829 40.4401 25.6099 39.9598 25.7207C39.3375 25.8644 38.6651 26.4102 38.1979 26.7721L38.2008 26.7693L8.53603 51.8442L8.46364 51.9579L8.53603 51.8442C8.53603 51.8442 7.80024 52.3597 7.86542 52.4661C7.99573 52.6791 8.6172 53.3896 8.96612 53.8595C9.66398 54.7994 15.1333 59.802 15.1333 59.802C15.1333 59.802 18.8777 62.6753 22.9866 64.0456C22.9866 64.0456 25.7603 65.0589 28.2475 65.4793C28.282 65.5116 28.6536 65.5663 28.8844 65.5775C28.8844 65.5775 26.492 62.0215 29.282 57.5049C30.4059 55.6854 33.1866 53.5693 35.7551 51.6904C37.0392 50.7509 38.2706 49.869 39.2181 49.1052C39.6918 48.7232 40.0945 48.371 40.3985 48.0541C40.7026 47.7371 40.9096 47.4575 40.9866 47.2045C41.3473 46.0185 41.1593 44.9431 40.6927 43.9169C40.2261 42.8906 39.4837 41.9093 38.7278 40.8893C37.216 38.8493 35.6536 36.6655 36.0827 33.6919C36.9253 27.853 40.7923 25.7317 40.7923 25.7317C40.7923 25.7317 41.0175 25.5849 40.8705 25.5781L40.7455 25.5829Z" stroke="#484848" stroke-width="3" />
                    <path d="M88.003 46.5V25.658H79.843V22.7H99.529V25.658H91.369V46.5H88.003ZM112.979 46.5V42.692L112.809 41.978V35.484C112.809 34.1013 112.401 33.036 111.585 32.288C110.792 31.5173 109.591 31.132 107.981 31.132C106.916 31.132 105.873 31.3133 104.853 31.676C103.833 32.016 102.972 32.4807 102.269 33.07L100.909 30.622C101.839 29.874 102.949 29.3073 104.241 28.922C105.556 28.514 106.927 28.31 108.355 28.31C110.826 28.31 112.73 28.9107 114.067 30.112C115.405 31.3133 116.073 33.1493 116.073 35.62V46.5H112.979ZM107.063 46.704C105.726 46.704 104.547 46.4773 103.527 46.024C102.53 45.5707 101.759 44.9473 101.215 44.154C100.671 43.338 100.399 42.42 100.399 41.4C100.399 40.4253 100.626 39.5413 101.079 38.748C101.555 37.9547 102.315 37.32 103.357 36.844C104.423 36.368 105.851 36.13 107.641 36.13H113.353V38.476H107.777C106.145 38.476 105.046 38.748 104.479 39.292C103.913 39.836 103.629 40.4933 103.629 41.264C103.629 42.148 103.981 42.862 104.683 43.406C105.386 43.9273 106.361 44.188 107.607 44.188C108.831 44.188 109.897 43.916 110.803 43.372C111.733 42.828 112.401 42.0347 112.809 40.992L113.455 43.236C113.025 44.3013 112.265 45.1513 111.177 45.786C110.089 46.398 108.718 46.704 107.063 46.704ZM131.736 28.31C133.209 28.31 134.501 28.5933 135.612 29.16C136.745 29.7267 137.629 30.588 138.264 31.744C138.898 32.9 139.216 34.362 139.216 36.13V46.5H135.952V36.504C135.952 34.7587 135.521 33.444 134.66 32.56C133.821 31.676 132.631 31.234 131.09 31.234C129.934 31.234 128.925 31.4607 128.064 31.914C127.202 32.3673 126.534 33.036 126.058 33.92C125.604 34.804 125.378 35.9033 125.378 37.218V46.5H122.114V21.272H125.378V33.342L124.732 32.05C125.321 30.8713 126.228 29.9533 127.452 29.296C128.676 28.6387 130.104 28.31 131.736 28.31ZM148.732 46.5L142.034 28.48H145.128L151.078 44.8H149.616L155.804 28.48H158.558L164.61 44.8H163.182L169.268 28.48H172.192L165.46 46.5H162.332L156.654 31.608H157.606L151.86 46.5H148.732ZM175.504 46.5V28.48H178.768V46.5H175.504ZM177.136 25.012C176.501 25.012 175.969 24.808 175.538 24.4C175.13 23.992 174.926 23.4933 174.926 22.904C174.926 22.292 175.13 21.782 175.538 21.374C175.969 20.966 176.501 20.762 177.136 20.762C177.771 20.762 178.292 20.966 178.7 21.374C179.131 21.7593 179.346 22.2467 179.346 22.836C179.346 23.448 179.142 23.9693 178.734 24.4C178.326 24.808 177.793 25.012 177.136 25.012ZM190.168 46.704C188.672 46.704 187.244 46.5 185.884 46.092C184.547 45.684 183.493 45.1853 182.722 44.596L184.082 42.012C184.853 42.5333 185.805 42.9753 186.938 43.338C188.072 43.7007 189.228 43.882 190.406 43.882C191.925 43.882 193.013 43.6667 193.67 43.236C194.35 42.8053 194.69 42.2047 194.69 41.434C194.69 40.8673 194.486 40.4253 194.078 40.108C193.67 39.7907 193.126 39.5527 192.446 39.394C191.789 39.2353 191.052 39.0993 190.236 38.986C189.42 38.85 188.604 38.6913 187.788 38.51C186.972 38.306 186.224 38.034 185.544 37.694C184.864 37.3313 184.32 36.844 183.912 36.232C183.504 35.5973 183.3 34.7587 183.3 33.716C183.3 32.628 183.606 31.676 184.218 30.86C184.83 30.044 185.692 29.4207 186.802 28.99C187.936 28.5367 189.273 28.31 190.814 28.31C191.993 28.31 193.183 28.4573 194.384 28.752C195.608 29.024 196.606 29.4207 197.376 29.942L195.982 32.526C195.166 31.982 194.316 31.608 193.432 31.404C192.548 31.2 191.664 31.098 190.78 31.098C189.352 31.098 188.287 31.336 187.584 31.812C186.882 32.2653 186.53 32.8547 186.53 33.58C186.53 34.192 186.734 34.668 187.142 35.008C187.573 35.3253 188.117 35.5747 188.774 35.756C189.454 35.9373 190.202 36.096 191.018 36.232C191.834 36.3453 192.65 36.504 193.466 36.708C194.282 36.8893 195.019 37.15 195.676 37.49C196.356 37.83 196.9 38.306 197.308 38.918C197.739 39.53 197.954 40.346 197.954 41.366C197.954 42.454 197.637 43.3947 197.002 44.188C196.368 44.9813 195.472 45.6047 194.316 46.058C193.16 46.4887 191.778 46.704 190.168 46.704ZM207.201 46.704C205.705 46.704 204.277 46.5 202.917 46.092C201.58 45.684 200.526 45.1853 199.755 44.596L201.115 42.012C201.886 42.5333 202.838 42.9753 203.971 43.338C205.105 43.7007 206.261 43.882 207.439 43.882C208.958 43.882 210.046 43.6667 210.703 43.236C211.383 42.8053 211.723 42.2047 211.723 41.434C211.723 40.8673 211.519 40.4253 211.111 40.108C210.703 39.7907 210.159 39.5527 209.479 39.394C208.822 39.2353 208.085 39.0993 207.269 38.986C206.453 38.85 205.637 38.6913 204.821 38.51C204.005 38.306 203.257 38.034 202.577 37.694C201.897 37.3313 201.353 36.844 200.945 36.232C200.537 35.5973 200.333 34.7587 200.333 33.716C200.333 32.628 200.639 31.676 201.251 30.86C201.863 30.044 202.725 29.4207 203.835 28.99C204.969 28.5367 206.306 28.31 207.847 28.31C209.026 28.31 210.216 28.4573 211.417 28.752C212.641 29.024 213.639 29.4207 214.409 29.942L213.015 32.526C212.199 31.982 211.349 31.608 210.465 31.404C209.581 31.2 208.697 31.098 207.813 31.098C206.385 31.098 205.32 31.336 204.617 31.812C203.915 32.2653 203.563 32.8547 203.563 33.58C203.563 34.192 203.767 34.668 204.175 35.008C204.606 35.3253 205.15 35.5747 205.807 35.756C206.487 35.9373 207.235 36.096 208.051 36.232C208.867 36.3453 209.683 36.504 210.499 36.708C211.315 36.8893 212.052 37.15 212.709 37.49C213.389 37.83 213.933 38.306 214.341 38.918C214.772 39.53 214.987 40.346 214.987 41.366C214.987 42.454 214.67 43.3947 214.035 44.188C213.401 44.9813 212.505 45.6047 211.349 46.058C210.193 46.4887 208.811 46.704 207.201 46.704ZM230.253 46.5V42.692L230.083 41.978V35.484C230.083 34.1013 229.675 33.036 228.859 32.288C228.065 31.5173 226.864 31.132 225.255 31.132C224.189 31.132 223.147 31.3133 222.127 31.676C221.107 32.016 220.245 32.4807 219.543 33.07L218.183 30.622C219.112 29.874 220.223 29.3073 221.515 28.922C222.829 28.514 224.201 28.31 225.629 28.31C228.099 28.31 230.003 28.9107 231.341 30.112C232.678 31.3133 233.347 33.1493 233.347 35.62V46.5H230.253ZM224.337 46.704C222.999 46.704 221.821 46.4773 220.801 46.024C219.803 45.5707 219.033 44.9473 218.489 44.154C217.945 43.338 217.673 42.42 217.673 41.4C217.673 40.4253 217.899 39.5413 218.353 38.748C218.829 37.9547 219.588 37.32 220.631 36.844C221.696 36.368 223.124 36.13 224.915 36.13H230.627V38.476H225.051C223.419 38.476 222.319 38.748 221.753 39.292C221.186 39.836 220.903 40.4933 220.903 41.264C220.903 42.148 221.254 42.862 221.957 43.406C222.659 43.9273 223.634 44.188 224.881 44.188C226.105 44.188 227.17 43.916 228.077 43.372C229.006 42.828 229.675 42.0347 230.083 40.992L230.729 43.236C230.298 44.3013 229.539 45.1513 228.451 45.786C227.363 46.398 225.991 46.704 224.337 46.704Z" fill="#484848" />
                    <path d="M88.003 46.5H87.703V46.8H88.003V46.5ZM88.003 25.658H88.303V25.358H88.003V25.658ZM79.843 25.658H79.543V25.958H79.843V25.658ZM79.843 22.7V22.4H79.543V22.7H79.843ZM99.529 22.7H99.829V22.4H99.529V22.7ZM99.529 25.658V25.958H99.829V25.658H99.529ZM91.369 25.658V25.358H91.069V25.658H91.369ZM91.369 46.5V46.8H91.669V46.5H91.369ZM88.303 46.5V25.658H87.703V46.5H88.303ZM88.003 25.358H79.843V25.958H88.003V25.358ZM80.143 25.658V22.7H79.543V25.658H80.143ZM79.843 23H99.529V22.4H79.843V23ZM99.229 22.7V25.658H99.829V22.7H99.229ZM99.529 25.358H91.369V25.958H99.529V25.358ZM91.069 25.658V46.5H91.669V25.658H91.069ZM91.369 46.2H88.003V46.8H91.369V46.2ZM112.979 46.5H112.679V46.8H112.979V46.5ZM112.979 42.692H113.279V42.6568L113.271 42.6225L112.979 42.692ZM112.809 41.978H112.509V42.0132L112.517 42.0475L112.809 41.978ZM111.585 32.288L111.376 32.5033L111.383 32.5091L111.585 32.288ZM104.853 31.676L104.948 31.9607L104.954 31.9587L104.853 31.676ZM102.269 33.07L102.007 33.2157L102.183 33.5334L102.462 33.2999L102.269 33.07ZM100.909 30.622L100.721 30.3883L100.524 30.5468L100.647 30.7677L100.909 30.622ZM104.241 28.922L104.327 29.2095L104.33 29.2085L104.241 28.922ZM116.073 46.5V46.8H116.373V46.5H116.073ZM103.527 46.024L103.403 46.2971L103.405 46.2981L103.527 46.024ZM101.215 44.154L100.966 44.3204L100.968 44.3237L101.215 44.154ZM101.079 38.748L100.822 38.5936L100.819 38.5992L101.079 38.748ZM103.357 36.844L103.235 36.5701L103.233 36.5711L103.357 36.844ZM113.353 36.13H113.653V35.83H113.353V36.13ZM113.353 38.476V38.776H113.653V38.476H113.353ZM104.479 39.292L104.271 39.0756L104.479 39.292ZM104.683 43.406L104.5 43.6433L104.504 43.6469L104.683 43.406ZM110.803 43.372L110.652 43.1131L110.649 43.1148L110.803 43.372ZM112.809 40.992L113.098 40.909L112.853 40.058L112.53 40.8827L112.809 40.992ZM113.455 43.236L113.733 43.3484L113.772 43.2525L113.744 43.153L113.455 43.236ZM111.177 45.786L111.324 46.0475L111.328 46.0451L111.177 45.786ZM113.279 46.5V42.692H112.679V46.5H113.279ZM113.271 42.6225L113.101 41.9085L112.517 42.0475L112.687 42.7615L113.271 42.6225ZM113.109 41.978V35.484H112.509V41.978H113.109ZM113.109 35.484C113.109 34.0397 112.681 32.8852 111.788 32.0669L111.383 32.5091C112.122 33.1868 112.509 34.163 112.509 35.484H113.109ZM111.794 32.0728C110.924 31.2273 109.633 30.832 107.981 30.832V31.432C109.548 31.432 110.66 31.8074 111.376 32.5032L111.794 32.0728ZM107.981 30.832C106.881 30.832 105.804 31.0194 104.753 31.3933L104.954 31.9587C105.942 31.6073 106.951 31.432 107.981 31.432V30.832ZM104.758 31.3914C103.709 31.7413 102.813 32.2228 102.076 32.8401L102.462 33.2999C103.131 32.7386 103.958 32.2907 104.948 31.9606L104.758 31.3914ZM102.531 32.9243L101.171 30.4763L100.647 30.7677L102.007 33.2157L102.531 32.9243ZM101.097 30.8557C101.993 30.1351 103.067 29.5851 104.327 29.2095L104.155 28.6345C102.831 29.0295 101.684 29.6129 100.721 30.3883L101.097 30.8557ZM104.33 29.2085C105.615 28.8098 106.956 28.61 108.355 28.61V28.01C106.898 28.01 105.497 28.2182 104.152 28.6355L104.33 29.2085ZM108.355 28.61C110.78 28.61 112.602 29.1992 113.867 30.3352L114.268 29.8888C112.858 28.6221 110.872 28.01 108.355 28.01V28.61ZM113.867 30.3352C115.12 31.4607 115.773 33.2013 115.773 35.62H116.373C116.373 33.0973 115.689 31.166 114.268 29.8888L113.867 30.3352ZM115.773 35.62V46.5H116.373V35.62H115.773ZM116.073 46.2H112.979V46.8H116.073V46.2ZM107.063 46.404C105.76 46.404 104.624 46.1831 103.649 45.7499L103.405 46.2981C104.471 46.7716 105.692 47.004 107.063 47.004V46.404ZM103.651 45.7509C102.697 45.317 101.972 44.7266 101.463 43.9843L100.968 44.3237C101.547 45.168 102.363 45.8244 103.403 46.2971L103.651 45.7509ZM101.465 43.9876C100.955 43.2229 100.699 42.3633 100.699 41.4H100.099C100.099 42.4767 100.387 43.4531 100.966 44.3204L101.465 43.9876ZM100.699 41.4C100.699 40.4739 100.914 39.6418 101.34 38.8968L100.819 38.5992C100.338 39.4409 100.099 40.3767 100.099 41.4H100.699ZM101.336 38.9023C101.774 38.1723 102.481 37.5738 103.482 37.1169L103.233 36.5711C102.148 37.0662 101.336 37.737 100.822 38.5937L101.336 38.9023ZM103.48 37.1179C104.491 36.6658 105.872 36.43 107.641 36.43V35.83C105.829 35.83 104.354 36.0702 103.235 36.5701L103.48 37.1179ZM107.641 36.43H113.353V35.83H107.641V36.43ZM113.053 36.13V38.476H113.653V36.13H113.053ZM113.353 38.176H107.777V38.776H113.353V38.176ZM107.777 38.176C106.947 38.176 106.238 38.245 105.657 38.3888C105.077 38.5322 104.606 38.7546 104.271 39.0756L104.687 39.5084C104.919 39.2854 105.281 39.0998 105.801 38.9712C106.319 38.843 106.976 38.776 107.777 38.776V38.176ZM104.271 39.0756C103.647 39.6749 103.329 40.4099 103.329 41.264H103.929C103.929 40.5768 104.178 39.9971 104.687 39.5084L104.271 39.0756ZM103.329 41.264C103.329 42.2414 103.724 43.0427 104.5 43.6432L104.867 43.1688C104.237 42.6812 103.929 42.0546 103.929 41.264H103.329ZM104.504 43.6469C105.277 44.2199 106.323 44.488 107.607 44.488V43.888C106.398 43.888 105.495 43.6348 104.862 43.1651L104.504 43.6469ZM107.607 44.488C108.877 44.488 109.997 44.2054 110.958 43.6292L110.649 43.1148C109.796 43.6266 108.786 43.888 107.607 43.888V44.488ZM110.955 43.6309C111.945 43.0514 112.657 42.2041 113.089 41.1013L112.53 40.8827C112.145 41.8652 111.52 42.6046 110.652 43.1131L110.955 43.6309ZM112.521 41.075L113.167 43.319L113.744 43.153L113.098 40.909L112.521 41.075ZM113.177 43.1236C112.774 44.1213 112.063 44.9223 111.026 45.5269L111.328 46.0451C112.468 45.3804 113.275 44.4814 113.733 43.3484L113.177 43.1236ZM111.03 45.5245C109.999 46.1044 108.683 46.404 107.063 46.404V47.004C108.753 47.004 110.179 46.6916 111.324 46.0475L111.03 45.5245ZM135.612 29.16L135.475 29.4272L135.477 29.4283L135.612 29.16ZM139.216 46.5V46.8H139.516V46.5H139.216ZM135.952 46.5H135.652V46.8H135.952V46.5ZM134.66 32.56L134.442 32.7665L134.445 32.7694L134.66 32.56ZM128.064 31.914L127.924 31.6485L128.064 31.914ZM126.058 33.92L125.793 33.7777L125.791 33.7831L126.058 33.92ZM125.378 46.5V46.8H125.678V46.5H125.378ZM122.114 46.5H121.814V46.8H122.114V46.5ZM122.114 21.272V20.972H121.814V21.272H122.114ZM125.378 21.272H125.678V20.972H125.378V21.272ZM125.378 33.342L125.109 33.4762L125.678 33.342H125.378ZM124.732 32.05L124.463 31.9158L124.396 32.05L124.463 32.1842L124.732 32.05ZM127.452 29.296L127.31 29.0317L127.452 29.296ZM131.736 28.61C133.17 28.61 134.414 28.8857 135.475 29.4272L135.748 28.8928C134.588 28.301 133.248 28.01 131.736 28.01V28.61ZM135.477 29.4283C136.554 29.9666 137.394 30.7835 138.001 31.8884L138.527 31.5996C137.864 30.3925 136.936 29.4868 135.746 28.8917L135.477 29.4283ZM138.001 31.8884C138.604 32.9876 138.916 34.396 138.916 36.13H139.516C139.516 34.328 139.192 32.8124 138.527 31.5996L138.001 31.8884ZM138.916 36.13V46.5H139.516V36.13H138.916ZM139.216 46.2H135.952V46.8H139.216V46.2ZM136.252 46.5V36.504H135.652V46.5H136.252ZM136.252 36.504C136.252 34.7131 135.809 33.3103 134.874 32.3506L134.445 32.7694C135.232 33.5777 135.652 34.8043 135.652 36.504H136.252ZM134.877 32.3535C133.968 31.3949 132.69 30.934 131.09 30.934V31.534C132.572 31.534 133.674 31.9571 134.442 32.7665L134.877 32.3535ZM131.09 30.934C129.894 30.934 128.836 31.1686 127.924 31.6485L128.203 32.1795C129.014 31.7527 129.973 31.534 131.09 31.534V30.934ZM127.924 31.6485C127.008 32.1306 126.297 32.843 125.793 33.7778L126.322 34.0622C126.77 33.229 127.396 32.6041 128.203 32.1795L127.924 31.6485ZM125.791 33.7831C125.31 34.7209 125.078 35.8705 125.078 37.218H125.678C125.678 35.9362 125.899 34.8871 126.324 34.0569L125.791 33.7831ZM125.078 37.218V46.5H125.678V37.218H125.078ZM125.378 46.2H122.114V46.8H125.378V46.2ZM122.414 46.5V21.272H121.814V46.5H122.414ZM122.114 21.572H125.378V20.972H122.114V21.572ZM125.078 21.272V33.342H125.678V21.272H125.078ZM125.646 33.2078L125 31.9158L124.463 32.1842L125.109 33.4762L125.646 33.2078ZM125 32.1842C125.56 31.064 126.421 30.19 127.593 29.5603L127.31 29.0317C126.034 29.7166 125.082 30.6787 124.463 31.9158L125 32.1842ZM127.593 29.5603C128.767 28.9302 130.144 28.61 131.736 28.61V28.01C130.063 28.01 128.584 28.3471 127.31 29.0317L127.593 29.5603ZM148.732 46.5L148.451 46.6045L148.524 46.8H148.732V46.5ZM142.034 28.48V28.18H141.603L141.753 28.5845L142.034 28.48ZM145.128 28.48L145.41 28.3772L145.338 28.18H145.128V28.48ZM151.078 44.8V45.1H151.507L151.36 44.6972L151.078 44.8ZM149.616 44.8L149.336 44.6936L149.181 45.1H149.616V44.8ZM155.804 28.48V28.18H155.597L155.524 28.3736L155.804 28.48ZM158.558 28.48L158.839 28.3757L158.767 28.18H158.558V28.48ZM164.61 44.8V45.1H165.041L164.891 44.6957L164.61 44.8ZM163.182 44.8L162.901 44.6952L162.75 45.1H163.182V44.8ZM169.268 28.48V28.18H169.06L168.987 28.3752L169.268 28.48ZM172.192 28.48L172.473 28.585L172.624 28.18H172.192V28.48ZM165.46 46.5V46.8H165.668L165.741 46.605L165.46 46.5ZM162.332 46.5L162.052 46.6069L162.125 46.8H162.332V46.5ZM156.654 31.608V31.308H156.219L156.374 31.7149L156.654 31.608ZM157.606 31.608L157.886 31.716L158.043 31.308H157.606V31.608ZM151.86 46.5V46.8H152.066L152.14 46.608L151.86 46.5ZM149.013 46.3955L142.315 28.3755L141.753 28.5845L148.451 46.6045L149.013 46.3955ZM142.034 28.78H145.128V28.18H142.034V28.78ZM144.846 28.5828L150.796 44.9028L151.36 44.6972L145.41 28.3772L144.846 28.5828ZM151.078 44.5H149.616V45.1H151.078V44.5ZM149.897 44.9064L156.085 28.5864L155.524 28.3736L149.336 44.6936L149.897 44.9064ZM155.804 28.78H158.558V28.18H155.804V28.78ZM158.277 28.5843L164.329 44.9043L164.891 44.6957L158.839 28.3757L158.277 28.5843ZM164.61 44.5H163.182V45.1H164.61V44.5ZM163.463 44.9048L169.549 28.5848L168.987 28.3752L162.901 44.6952L163.463 44.9048ZM169.268 28.78H172.192V28.18H169.268V28.78ZM171.911 28.375L165.179 46.395L165.741 46.605L172.473 28.585L171.911 28.375ZM165.46 46.2H162.332V46.8H165.46V46.2ZM162.612 46.3931L156.934 31.5011L156.374 31.7149L162.052 46.6069L162.612 46.3931ZM156.654 31.908H157.606V31.308H156.654V31.908ZM157.326 31.5L151.58 46.392L152.14 46.608L157.886 31.716L157.326 31.5ZM151.86 46.2H148.732V46.8H151.86V46.2ZM175.504 46.5H175.204V46.8H175.504V46.5ZM175.504 28.48V28.18H175.204V28.48H175.504ZM178.768 28.48H179.068V28.18H178.768V28.48ZM178.768 46.5V46.8H179.068V46.5H178.768ZM175.538 24.4L175.326 24.6122L175.332 24.6178L175.538 24.4ZM175.538 21.374L175.332 21.1561L175.326 21.1619L175.538 21.374ZM178.7 21.374L178.488 21.5861L178.494 21.592L178.5 21.5976L178.7 21.374ZM178.734 24.4L178.946 24.6122L178.952 24.6063L178.734 24.4ZM175.804 46.5V28.48H175.204V46.5H175.804ZM175.504 28.78H178.768V28.18H175.504V28.78ZM178.468 28.48V46.5H179.068V28.48H178.468ZM178.768 46.2H175.504V46.8H178.768V46.2ZM177.136 24.712C176.572 24.712 176.115 24.5335 175.744 24.1822L175.332 24.6178C175.822 25.0825 176.431 25.312 177.136 25.312V24.712ZM175.75 24.1879C175.4 23.8375 175.226 23.4157 175.226 22.904H174.626C174.626 23.571 174.86 24.1465 175.326 24.6121L175.75 24.1879ZM175.226 22.904C175.226 22.3662 175.402 21.9342 175.75 21.5861L175.326 21.1619C174.858 21.6298 174.626 22.2178 174.626 22.904H175.226ZM175.744 21.5918C176.115 21.2405 176.572 21.062 177.136 21.062V20.462C176.431 20.462 175.822 20.6915 175.332 21.1562L175.744 21.5918ZM177.136 21.062C177.7 21.062 178.142 21.2403 178.488 21.5861L178.912 21.1619C178.442 20.6917 177.842 20.462 177.136 20.462V21.062ZM178.5 21.5976C178.866 21.9247 179.046 22.3301 179.046 22.836H179.646C179.646 22.1632 179.396 21.5939 178.9 21.1504L178.5 21.5976ZM179.046 22.836C179.046 23.3739 178.87 23.8207 178.516 24.1937L178.952 24.6063C179.415 24.118 179.646 23.5221 179.646 22.836H179.046ZM178.522 24.1879C178.178 24.5316 177.726 24.712 177.136 24.712V25.312C177.861 25.312 178.474 25.0844 178.946 24.6121L178.522 24.1879ZM185.884 46.092L185.797 46.3789L185.798 46.3793L185.884 46.092ZM182.722 44.596L182.457 44.4563L182.339 44.6804L182.54 44.8343L182.722 44.596ZM184.082 42.012L184.25 41.7635L183.973 41.5758L183.817 41.8723L184.082 42.012ZM186.938 43.338L186.847 43.6237L186.938 43.338ZM193.67 43.236L193.51 42.9825L193.506 42.9851L193.67 43.236ZM192.446 39.394L192.376 39.6856L192.378 39.6862L192.446 39.394ZM190.236 38.986L190.187 39.282L190.195 39.2831L190.236 38.986ZM187.788 38.51L187.715 38.8011L187.723 38.8029L187.788 38.51ZM185.544 37.694L185.403 37.9588L185.41 37.9623L185.544 37.694ZM183.912 36.232L183.66 36.3942L183.663 36.3984L183.912 36.232ZM184.218 30.86L184.458 31.04L184.218 30.86ZM186.802 28.99L186.911 29.2697L186.914 29.2685L186.802 28.99ZM194.384 28.752L194.313 29.0434L194.319 29.0449L194.384 28.752ZM197.376 29.942L197.64 30.0844L197.769 29.8456L197.544 29.6935L197.376 29.942ZM195.982 32.526L195.816 32.7756L196.09 32.9583L196.246 32.6684L195.982 32.526ZM193.432 31.404L193.5 31.1117L193.432 31.404ZM187.584 31.812L187.747 32.0642L187.753 32.0604L187.584 31.812ZM187.142 35.008L186.95 35.2385L186.957 35.2442L186.964 35.2495L187.142 35.008ZM188.774 35.756L188.694 36.0452L188.697 36.0459L188.774 35.756ZM191.018 36.232L190.969 36.528L190.977 36.5291L191.018 36.232ZM193.466 36.708L193.393 36.9991L193.401 37.0009L193.466 36.708ZM195.676 37.49L195.538 37.7565L195.542 37.7583L195.676 37.49ZM197.308 38.918L197.059 39.0845L197.063 39.0906L197.308 38.918ZM197.002 44.188L197.237 44.3754L197.002 44.188ZM194.316 46.058L194.421 46.3392L194.426 46.3373L194.316 46.058ZM190.168 46.404C188.7 46.404 187.301 46.2038 185.97 45.8047L185.798 46.3793C187.187 46.7962 188.645 47.004 190.168 47.004V46.404ZM185.972 45.8051C184.655 45.4033 183.637 44.918 182.904 44.3577L182.54 44.8343C183.349 45.4527 184.439 45.9647 185.797 46.3789L185.972 45.8051ZM182.988 44.7357L184.348 42.1517L183.817 41.8723L182.457 44.4563L182.988 44.7357ZM183.914 42.2605C184.714 42.8015 185.693 43.2547 186.847 43.6237L187.03 43.0523C185.916 42.696 184.992 42.2651 184.25 41.7635L183.914 42.2605ZM186.847 43.6237C188.009 43.9958 189.196 44.182 190.406 44.182V43.582C189.259 43.582 188.134 43.4056 187.03 43.0523L186.847 43.6237ZM190.406 44.182C191.938 44.182 193.101 43.9678 193.835 43.4869L193.506 42.9851C192.925 43.3655 191.912 43.582 190.406 43.582V44.182ZM193.831 43.4894C194.593 43.0067 194.99 42.3129 194.99 41.434H194.39C194.39 42.0965 194.108 42.6039 193.51 42.9826L193.831 43.4894ZM194.99 41.434C194.99 40.785 194.751 40.2514 194.262 39.8712L193.894 40.3448C194.221 40.5993 194.39 40.9497 194.39 41.434H194.99ZM194.262 39.8712C193.81 39.5196 193.223 39.2671 192.514 39.1018L192.378 39.6862C193.03 39.8382 193.53 40.0617 193.894 40.3448L194.262 39.8712ZM192.517 39.1024C191.848 38.941 191.101 38.8033 190.278 38.6889L190.195 39.2831C191.003 39.3954 191.73 39.5297 192.376 39.6856L192.517 39.1024ZM190.286 38.6901C189.475 38.555 188.664 38.3973 187.853 38.2171L187.723 38.8029C188.544 38.9853 189.366 39.145 190.187 39.2819L190.286 38.6901ZM187.861 38.219C187.064 38.0197 186.337 37.7549 185.678 37.4257L185.41 37.9623C186.112 38.3131 186.88 38.5923 187.715 38.801L187.861 38.219ZM185.685 37.4293C185.047 37.0888 184.541 36.6344 184.162 36.0656L183.663 36.3984C184.099 37.0536 184.682 37.5739 185.403 37.9587L185.685 37.4293ZM184.165 36.0698C183.797 35.4987 183.6 34.7223 183.6 33.716H183C183 34.795 183.211 35.696 183.66 36.3942L184.165 36.0698ZM183.6 33.716C183.6 32.6883 183.888 31.8005 184.458 31.04L183.978 30.68C183.325 31.5515 183 32.5677 183 33.716H183.6ZM184.458 31.04C185.031 30.276 185.843 29.6836 186.911 29.2697L186.694 28.7103C185.54 29.1578 184.629 29.812 183.978 30.68L184.458 31.04ZM186.914 29.2685C188.004 28.8326 189.301 28.61 190.814 28.61V28.01C189.244 28.01 187.868 28.2408 186.691 28.7115L186.914 29.2685ZM190.814 28.61C191.968 28.61 193.134 28.7541 194.313 29.0434L194.456 28.4606C193.232 28.1605 192.018 28.01 190.814 28.01V28.61ZM194.319 29.0449C195.518 29.3113 196.478 29.6962 197.208 30.1905L197.544 29.6935C196.734 29.1451 195.698 28.7367 194.449 28.4591L194.319 29.0449ZM197.112 29.7996L195.718 32.3836L196.246 32.6684L197.64 30.0844L197.112 29.7996ZM196.149 32.2764C195.305 31.7139 194.422 31.3245 193.5 31.1117L193.365 31.6963C194.211 31.8915 195.028 32.2501 195.816 32.7756L196.149 32.2764ZM193.5 31.1117C192.594 30.9027 191.688 30.798 190.78 30.798V31.398C191.641 31.398 192.502 31.4973 193.365 31.6963L193.5 31.1117ZM190.78 30.798C189.329 30.798 188.192 31.038 187.416 31.5636L187.753 32.0604C188.382 31.634 189.376 31.398 190.78 31.398V30.798ZM187.422 31.5599C186.649 32.0586 186.23 32.7358 186.23 33.58H186.83C186.83 32.9736 187.115 32.4721 187.747 32.0641L187.422 31.5599ZM186.23 33.58C186.23 34.2659 186.463 34.8324 186.95 35.2385L187.334 34.7775C187.006 34.5036 186.83 34.1181 186.83 33.58H186.23ZM186.964 35.2495C187.431 35.5937 188.011 35.8567 188.694 36.0452L188.854 35.4668C188.223 35.2927 187.714 35.057 187.32 34.7665L186.964 35.2495ZM188.697 36.0459C189.388 36.23 190.145 36.3906 190.969 36.5279L191.068 35.9361C190.259 35.8014 189.521 35.6446 188.852 35.4661L188.697 36.0459ZM190.977 36.5291C191.782 36.641 192.588 36.7976 193.393 36.999L193.539 36.417C192.713 36.2104 191.886 36.0497 191.06 35.9349L190.977 36.5291ZM193.401 37.0009C194.195 37.1773 194.907 37.4298 195.538 37.7565L195.814 37.2235C195.131 36.8702 194.369 36.6014 193.531 36.4151L193.401 37.0009ZM195.542 37.7583C196.177 38.0758 196.681 38.5173 197.059 39.0844L197.558 38.7516C197.12 38.0947 196.535 37.5842 195.81 37.2217L195.542 37.7583ZM197.063 39.0906C197.447 39.6367 197.654 40.3859 197.654 41.366H198.254C198.254 40.3061 198.031 39.4233 197.554 38.7454L197.063 39.0906ZM197.654 41.366C197.654 42.3911 197.357 43.2644 196.768 44.0006L197.237 44.3754C197.917 43.525 198.254 42.5169 198.254 41.366H197.654ZM196.768 44.0006C196.173 44.7447 195.325 45.3403 194.207 45.7787L194.426 46.3373C195.62 45.869 196.562 45.218 197.237 44.3754L196.768 44.0006ZM194.212 45.7769C193.097 46.1919 191.752 46.404 190.168 46.404V47.004C191.803 47.004 193.223 46.7854 194.421 46.3391L194.212 45.7769ZM202.917 46.092L202.83 46.3789L202.831 46.3793L202.917 46.092ZM199.755 44.596L199.49 44.4563L199.372 44.6804L199.573 44.8343L199.755 44.596ZM201.115 42.012L201.284 41.7635L201.006 41.5758L200.85 41.8723L201.115 42.012ZM203.971 43.338L203.88 43.6237L203.971 43.338ZM210.703 43.236L210.543 42.9825L210.539 42.9851L210.703 43.236ZM209.479 39.394L209.409 39.6856L209.411 39.6862L209.479 39.394ZM207.269 38.986L207.22 39.282L207.228 39.2831L207.269 38.986ZM204.821 38.51L204.749 38.8011L204.756 38.8029L204.821 38.51ZM202.577 37.694L202.436 37.9588L202.443 37.9623L202.577 37.694ZM200.945 36.232L200.693 36.3942L200.696 36.3984L200.945 36.232ZM201.251 30.86L201.491 31.04L201.251 30.86ZM203.835 28.99L203.944 29.2697L203.947 29.2685L203.835 28.99ZM211.417 28.752L211.346 29.0434L211.352 29.0449L211.417 28.752ZM214.409 29.942L214.673 30.0844L214.802 29.8456L214.578 29.6935L214.409 29.942ZM213.015 32.526L212.849 32.7756L213.123 32.9583L213.279 32.6684L213.015 32.526ZM210.465 31.404L210.533 31.1117L210.465 31.404ZM204.617 31.812L204.78 32.0642L204.786 32.0604L204.617 31.812ZM204.175 35.008L203.983 35.2385L203.99 35.2442L203.997 35.2495L204.175 35.008ZM205.807 35.756L205.728 36.0452L205.73 36.0459L205.807 35.756ZM208.051 36.232L208.002 36.528L208.01 36.5291L208.051 36.232ZM210.499 36.708L210.427 36.9991L210.434 37.0009L210.499 36.708ZM212.709 37.49L212.572 37.7565L212.575 37.7583L212.709 37.49ZM214.341 38.918L214.092 39.0845L214.096 39.0906L214.341 38.918ZM214.035 44.188L214.27 44.3754L214.035 44.188ZM211.349 46.058L211.454 46.3392L211.459 46.3373L211.349 46.058ZM207.201 46.404C205.733 46.404 204.334 46.2038 203.004 45.8047L202.831 46.3793C204.221 46.7962 205.678 47.004 207.201 47.004V46.404ZM203.005 45.8051C201.688 45.4033 200.67 44.918 199.938 44.3577L199.573 44.8343C200.382 45.4527 201.472 45.9647 202.83 46.3789L203.005 45.8051ZM200.021 44.7357L201.381 42.1517L200.85 41.8723L199.49 44.4563L200.021 44.7357ZM200.947 42.2605C201.747 42.8015 202.727 43.2547 203.88 43.6237L204.063 43.0523C202.95 42.696 202.025 42.2651 201.284 41.7635L200.947 42.2605ZM203.88 43.6237C205.043 43.9958 206.229 44.182 207.439 44.182V43.582C206.292 43.582 205.167 43.4056 204.063 43.0523L203.88 43.6237ZM207.439 44.182C208.971 44.182 210.134 43.9678 210.868 43.4869L210.539 42.9851C209.958 43.3655 208.945 43.582 207.439 43.582V44.182ZM210.864 43.4894C211.626 43.0067 212.023 42.3129 212.023 41.434H211.423C211.423 42.0965 211.141 42.6039 210.543 42.9826L210.864 43.4894ZM212.023 41.434C212.023 40.785 211.784 40.2514 211.296 39.8712L210.927 40.3448C211.254 40.5993 211.423 40.9497 211.423 41.434H212.023ZM211.296 39.8712C210.844 39.5196 210.256 39.2671 209.548 39.1018L209.411 39.6862C210.063 39.8382 210.563 40.0617 210.927 40.3448L211.296 39.8712ZM209.55 39.1024C208.881 38.941 208.134 38.8033 207.311 38.6889L207.228 39.2831C208.036 39.3954 208.763 39.5297 209.409 39.6856L209.55 39.1024ZM207.319 38.6901C206.508 38.555 205.697 38.3973 204.887 38.2171L204.756 38.8029C205.578 38.9853 206.399 39.145 207.22 39.2819L207.319 38.6901ZM204.894 38.219C204.097 38.0197 203.37 37.7549 202.712 37.4257L202.443 37.9623C203.145 38.3131 203.914 38.5923 204.749 38.801L204.894 38.219ZM202.719 37.4293C202.08 37.0888 201.574 36.6344 201.195 36.0656L200.696 36.3984C201.133 37.0536 201.715 37.5739 202.436 37.9587L202.719 37.4293ZM201.198 36.0698C200.831 35.4987 200.633 34.7223 200.633 33.716H200.033C200.033 34.795 200.244 35.696 200.693 36.3942L201.198 36.0698ZM200.633 33.716C200.633 32.6883 200.921 31.8005 201.491 31.04L201.011 30.68C200.358 31.5515 200.033 32.5677 200.033 33.716H200.633ZM201.491 31.04C202.064 30.276 202.877 29.6836 203.944 29.2697L203.727 28.7103C202.573 29.1578 201.662 29.812 201.011 30.68L201.491 31.04ZM203.947 29.2685C205.037 28.8326 206.335 28.61 207.847 28.61V28.01C206.278 28.01 204.901 28.2408 203.724 28.7115L203.947 29.2685ZM207.847 28.61C209.001 28.61 210.167 28.7541 211.346 29.0434L211.489 28.4606C210.265 28.1605 209.051 28.01 207.847 28.01V28.61ZM211.352 29.0449C212.552 29.3113 213.511 29.6962 214.241 30.1905L214.578 29.6935C213.767 29.1451 212.731 28.7367 211.483 28.4591L211.352 29.0449ZM214.145 29.7996L212.751 32.3836L213.279 32.6684L214.673 30.0844L214.145 29.7996ZM213.182 32.2764C212.338 31.7139 211.455 31.3245 210.533 31.1117L210.398 31.6963C211.244 31.8915 212.061 32.2501 212.849 32.7756L213.182 32.2764ZM210.533 31.1117C209.627 30.9027 208.721 30.798 207.813 30.798V31.398C208.674 31.398 209.536 31.4973 210.398 31.6963L210.533 31.1117ZM207.813 30.798C206.362 30.798 205.225 31.038 204.449 31.5636L204.786 32.0604C205.415 31.634 206.409 31.398 207.813 31.398V30.798ZM204.455 31.5599C203.682 32.0586 203.263 32.7358 203.263 33.58H203.863C203.863 32.9736 204.148 32.4721 204.78 32.0641L204.455 31.5599ZM203.263 33.58C203.263 34.2659 203.496 34.8324 203.983 35.2385L204.368 34.7775C204.039 34.5036 203.863 34.1181 203.863 33.58H203.263ZM203.997 35.2495C204.465 35.5937 205.044 35.8567 205.728 36.0452L205.887 35.4668C205.256 35.2927 204.748 35.057 204.353 34.7665L203.997 35.2495ZM205.73 36.0459C206.421 36.23 207.178 36.3906 208.002 36.5279L208.101 35.9361C207.293 35.8014 206.554 35.6446 205.885 35.4661L205.73 36.0459ZM208.01 36.5291C208.815 36.641 209.621 36.7976 210.427 36.999L210.572 36.417C209.746 36.2104 208.92 36.0497 208.093 35.9349L208.01 36.5291ZM210.434 37.0009C211.228 37.1773 211.94 37.4298 212.572 37.7565L212.847 37.2235C212.164 36.8702 211.403 36.6014 210.565 36.4151L210.434 37.0009ZM212.575 37.7583C213.21 38.0758 213.714 38.5173 214.092 39.0844L214.591 38.7516C214.153 38.0947 213.569 37.5842 212.844 37.2217L212.575 37.7583ZM214.096 39.0906C214.48 39.6367 214.687 40.3859 214.687 41.366H215.287C215.287 40.3061 215.064 39.4233 214.587 38.7454L214.096 39.0906ZM214.687 41.366C214.687 42.3911 214.39 43.2644 213.801 44.0006L214.27 44.3754C214.95 43.525 215.287 42.5169 215.287 41.366H214.687ZM213.801 44.0006C213.206 44.7447 212.358 45.3403 211.24 45.7787L211.459 46.3373C212.653 45.869 213.596 45.218 214.27 44.3754L213.801 44.0006ZM211.245 45.7769C210.131 46.1919 208.785 46.404 207.201 46.404V47.004C208.836 47.004 210.256 46.7854 211.454 46.3391L211.245 45.7769ZM230.253 46.5H229.953V46.8H230.253V46.5ZM230.253 42.692H230.553V42.6568L230.544 42.6225L230.253 42.692ZM230.083 41.978H229.783V42.0132L229.791 42.0475L230.083 41.978ZM228.859 32.288L228.65 32.5033L228.656 32.5091L228.859 32.288ZM222.127 31.676L222.222 31.9607L222.227 31.9587L222.127 31.676ZM219.543 33.07L219.28 33.2157L219.457 33.5334L219.735 33.2999L219.543 33.07ZM218.183 30.622L217.995 30.3883L217.798 30.5468L217.92 30.7677L218.183 30.622ZM221.515 28.922L221.6 29.2095L221.604 29.2085L221.515 28.922ZM233.347 46.5V46.8H233.647V46.5H233.347ZM220.801 46.024L220.677 46.2971L220.679 46.2981L220.801 46.024ZM218.489 44.154L218.239 44.3204L218.241 44.3237L218.489 44.154ZM218.353 38.748L218.095 38.5936L218.092 38.5992L218.353 38.748ZM220.631 36.844L220.508 36.5701L220.506 36.5711L220.631 36.844ZM230.627 36.13H230.927V35.83H230.627V36.13ZM230.627 38.476V38.776H230.927V38.476H230.627ZM221.753 39.292L221.545 39.0756L221.753 39.292ZM221.957 43.406L221.773 43.6433L221.778 43.6469L221.957 43.406ZM228.077 43.372L227.925 43.1131L227.922 43.1148L228.077 43.372ZM230.083 40.992L230.371 40.909L230.126 40.058L229.803 40.8827L230.083 40.992ZM230.729 43.236L231.007 43.3484L231.046 43.2525L231.017 43.153L230.729 43.236ZM228.451 45.786L228.598 46.0475L228.602 46.0451L228.451 45.786ZM230.553 46.5V42.692H229.953V46.5H230.553ZM230.544 42.6225L230.374 41.9085L229.791 42.0475L229.961 42.7615L230.544 42.6225ZM230.383 41.978V35.484H229.783V41.978H230.383ZM230.383 35.484C230.383 34.0397 229.954 32.8852 229.061 32.0669L228.656 32.5091C229.395 33.1868 229.783 34.163 229.783 35.484H230.383ZM229.068 32.0728C228.197 31.2273 226.907 30.832 225.255 30.832V31.432C226.821 31.432 227.933 31.8074 228.65 32.5032L229.068 32.0728ZM225.255 30.832C224.155 30.832 223.078 31.0194 222.026 31.3933L222.227 31.9587C223.215 31.6073 224.224 31.432 225.255 31.432V30.832ZM222.032 31.3914C220.982 31.7413 220.086 32.2228 219.35 32.8401L219.735 33.2999C220.405 32.7386 221.231 32.2907 222.222 31.9606L222.032 31.3914ZM219.805 32.9243L218.445 30.4763L217.92 30.7677L219.28 33.2157L219.805 32.9243ZM218.371 30.8557C219.266 30.1351 220.341 29.5851 221.6 29.2095L221.429 28.6345C220.104 29.0295 218.958 29.6129 217.995 30.3883L218.371 30.8557ZM221.604 29.2085C222.888 28.8098 224.23 28.61 225.629 28.61V28.01C224.172 28.01 222.77 28.2182 221.426 28.6355L221.604 29.2085ZM225.629 28.61C228.053 28.61 229.876 29.1992 231.14 30.3352L231.541 29.8888C230.131 28.6221 228.145 28.01 225.629 28.01V28.61ZM231.14 30.3352C232.393 31.4607 233.047 33.2013 233.047 35.62H233.647C233.647 33.0973 232.963 31.166 231.541 29.8888L231.14 30.3352ZM233.047 35.62V46.5H233.647V35.62H233.047ZM233.347 46.2H230.253V46.8H233.347V46.2ZM224.337 46.404C223.033 46.404 221.897 46.1831 220.923 45.7499L220.679 46.2981C221.744 46.7716 222.966 47.004 224.337 47.004V46.404ZM220.925 45.7509C219.97 45.317 219.245 44.7266 218.736 43.9843L218.241 44.3237C218.82 45.168 219.636 45.8244 220.677 46.2971L220.925 45.7509ZM218.738 43.9876C218.228 43.2229 217.973 42.3633 217.973 41.4H217.373C217.373 42.4767 217.661 43.4531 218.239 44.3204L218.738 43.9876ZM217.973 41.4C217.973 40.4739 218.187 39.6418 218.613 38.8968L218.092 38.5992C217.611 39.4409 217.373 40.3767 217.373 41.4H217.973ZM218.61 38.9023C219.048 38.1723 219.754 37.5738 220.755 37.1169L220.506 36.5711C219.421 37.0662 218.609 37.737 218.095 38.5937L218.61 38.9023ZM220.753 37.1179C221.765 36.6658 223.146 36.43 224.915 36.43V35.83C223.102 35.83 221.627 36.0702 220.508 36.5701L220.753 37.1179ZM224.915 36.43H230.627V35.83H224.915V36.43ZM230.327 36.13V38.476H230.927V36.13H230.327ZM230.627 38.176H225.051V38.776H230.627V38.176ZM225.051 38.176C224.22 38.176 223.511 38.245 222.93 38.3888C222.351 38.5322 221.879 38.7546 221.545 39.0756L221.96 39.5084C222.193 39.2854 222.554 39.0998 223.074 38.9712C223.592 38.843 224.249 38.776 225.051 38.776V38.176ZM221.545 39.0756C220.921 39.6749 220.603 40.4099 220.603 41.264H221.203C221.203 40.5768 221.451 39.9971 221.96 39.5084L221.545 39.0756ZM220.603 41.264C220.603 42.2414 220.997 43.0427 221.773 43.6432L222.14 43.1688C221.511 42.6812 221.203 42.0546 221.203 41.264H220.603ZM221.778 43.6469C222.55 44.2199 223.596 44.488 224.881 44.488V43.888C223.672 43.888 222.769 43.6348 222.135 43.1651L221.778 43.6469ZM224.881 44.488C226.15 44.488 227.271 44.2054 228.231 43.6292L227.922 43.1148C227.069 43.6266 226.059 43.888 224.881 43.888V44.488ZM228.228 43.6309C229.218 43.0514 229.931 42.2041 230.362 41.1013L229.803 40.8827C229.419 41.8652 228.794 42.6046 227.925 43.1131L228.228 43.6309ZM229.794 41.075L230.44 43.319L231.017 43.153L230.371 40.909L229.794 41.075ZM230.451 43.1236C230.047 44.1213 229.336 44.9223 228.299 45.5269L228.602 46.0451C229.741 45.3804 230.549 44.4814 231.007 43.3484L230.451 43.1236ZM228.304 45.5245C227.273 46.1044 225.956 46.404 224.337 46.404V47.004C226.027 47.004 227.453 46.6916 228.598 46.0475L228.304 45.5245Z" fill="#484848" />
                </svg>
            </Link>
            <div class="ml-[5.2083vw] my-auto flex items-center gap-[2.6vw]">
                <Link class="nav" to={"/Explore"} >Explore</Link>
                <Link class="nav" to={"/Destinations"}>Destinations</Link>
                <a class="nav">Interactive Map</a>
                <a class="nav">Itineraries</a>
            </div>
        </header>
    )
}

export default Navbar