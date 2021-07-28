import { defineComponent } from "vue";

export default defineComponent({
    template: "<div id='_loader_spinner'></div>",
    props: {
        bgColor: {
            default: "#df1e24",
            type: String,
            required: false,
        },
        width: {
            default: "0%",
            type: String,
            required: false,
        },
        height: {
            default: "5px",
            type: String,
            reqired: false,
        },
    },
    setup(props) {
        window.addEventListener("DOMContentLoaded", (): void => {
            const loader: HTMLScriptElement =
                document.querySelector("#_loader_spinner");

            // set styles
            loader.style.position = "fixed";
            loader.style.top = "0";
            loader.style.width = props.width;
            loader.style.height = props.height;
            loader.style.backgroundColor = props.bgColor;
            loader.style.zIndex = "1121";
            loader.style.transition = "width .5s ease";

            window.onscroll = (): void => {
                let scrollTop = window.scrollY;
                let docHeight = document.body.offsetHeight;
                let winHeight = window.innerHeight;
                let scrollPercent = scrollTop / (docHeight - winHeight);
                let scrollPercentRounded = Math.round(scrollPercent * 100);

                loader.style.width = `${scrollPercentRounded}%`;
            };
        });

        return {};
    },
});
