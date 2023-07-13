import { Component } from "react";
import DaftarMakanan from "../Lib/DaftarMakanan";

class MenuMakanan extends Component {
  render() {
    return (
      <div>
        <h3>Daftar Makanan Favorit</h3>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              {/* mapping Daftar Makanan to the JSX for content */}
              {DaftarMakanan.map((data, index) => {
                return (
                  //adding key to identify which element changed
                  <td key={index}>
                    <center>
                      <img
                        src={data.img}
                        alt="Produk Makanan"
                        width={150}
                        height={100}
                      />
                      <p>{data.NamaMakanan}</p>
                      <p>Harga : RP. {data.Harga}</p>
                    </center>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MenuMakanan;
