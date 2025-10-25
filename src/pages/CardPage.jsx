// CardPage.jsx
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CardPage() {
  return (
    <>
        <Navbar />
          <div className='card-area'>
            <table>
              <tr>
                <th>No</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Iphone 16</td>
                <td>1</td>
                <td>300</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Iphone 15</td>
                <td>2</td>
                <td>700</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Iphone 15</td>
                <td>2</td>
                <td>700</td>
              </tr>
            </table>
          </div>
        <Footer />
    </>
  )
}

export default CardPage