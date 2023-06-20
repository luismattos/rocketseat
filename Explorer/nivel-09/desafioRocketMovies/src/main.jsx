import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import { Routes } from "./routes";
import theme from "./styles/theme.js";
import GlobalStyle from "./styles/global.js";
import { Movie } from "./components/movie";
import { Profile } from "./pages/profile";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolores aperiam delectus tempora officiis consequatur! Sunt nostrum vero rerum hic eius molestias porro, inventore quia explicabo architecto officiis! Molestiae saepe animi aliquam perspiciatis, alias quisquam architecto beatae, fugit vitae consequuntur dignissimos laudantium illo autem reiciendis. Animi voluptates modi minima, vel et molestiae neque, est sunt dolor numquam quaerat beatae similique labore magnam? Ipsam modi tempora obcaecati placeat officiis in, nemo vitae explicabo sapiente assumenda, fugiat cumque laboriosam sit harum quos aut autem! Quisquam quaerat eius eligendi illo at laboriosam neque aliquid quo odit facere. Ad iste eius accusantium nobis officiis, aspernatur culpa illo fuga, dolorum voluptates quis totam nisi amet libero molestias. Eius quo illo voluptatum nesciunt blanditiis esse rerum aliquam mollitia expedita quas omnis itaque, ducimus animi reiciendis, iusto inventore commodi suscipit molestiae, voluptates nemo veniam sunt in repudiandae quisquam? Aliquid quae earum natus quibusdam tempora cumque dolorem aspernatur nobis voluptate, eligendi error expedita, nesciunt rem. Eius quo illo voluptatum nesciunt blanditiis esse rerum aliquam mollitia expedita quas omnis itaque, ducimus animi reiciendis, iusto inventore commodi suscipit molestiae, voluptates nemo veniam sunt in repudiandae quisquam? Aliquid quae earum natus quibusdam tempora cumque dolorem aspernatur nobis voluptate, eligendi error expedita, nesciunt rem.";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Profile
        userImgUrl={"https://github.com/luismattos.png"}
        userEmail={"luismattos89@gmail.com"}
        userName={"luismattos"}
      />
    </ThemeProvider>
  </React.StrictMode>
);
