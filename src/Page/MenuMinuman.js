import { Component } from "react";
import DaftarMinuman from "../Lib/DaftarMinuman";

class MenuMinuman extends Component {
  render() {
    return (
      <div>
        <h3>Daftar Minuman Favorit</h3>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              {/* mapping Daftar Minuman to the JSX for content */}
              {DaftarMinuman.map((data, index) => {
                return (
                  //adding key to identify which element changed
                  <td key={index}>
                    <center>
                      <img
                        src={data.img}
                        alt="Produk Minuman"
                        width={150}
                        height={100}
                      />
                      <p>{data.NamaMinuman}</p>
                      <p>Harga : Rp. {data.Harga}</p>
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

export default MenuMinuman;
