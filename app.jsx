// Import file CSS untuk styling
import './App.css'

// Import library pembuat nama random
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

// Komponen utama App
export default function App() {
  return (
    <main>
      {/* Judul halaman */}
      <h3>Belajar React</h3>

      {/* Menampilkan contoh Event */}
      {/* <EventExample /> */}

      {/* Menampilkan generator nama random */}
      {/* <GenerateRandomName /> */}

      {/* Menampilkan conditional rendering */}
      {/* <ConditionalExample isLoading={false} /> */}

      {/* Menampilkan daftar produk */}
      {<ListKeyExample />}
    </main>
  )
}


// =======================
// COMPONENT LIST PRODUK
// =======================
function ListKeyExample() {

  // Array berisi data produk HP
  const phoneData = [
    { name: "iPhone X", price: 10000000, discount: 50 },
    { name: "Oppo Find X", price: 14000000, discount: 30 },
    { name: "Redmi Note X", price: 5000000, discount: 42 },
    { name: "Vivo XYZ", price: 10000000, discount: 0 },
  ];

  return (
    <div>

      {/* map() digunakan untuk menampilkan semua data produk */}
      {
        phoneData.map(data => {
          return (
            <Product

              // key wajib diberikan saat rendering list
              key={data.name}

              // mengirim data ke komponen Product melalui props
              name={data.name}
              price={data.price}
              discount={data.discount}
            />
          )
        })
      }

    </div>
  )
}


// =======================
// COMPONENT PRODUK
// =======================
function Product({ name, price, discount = 0 }) {

  // discount = 0 adalah nilai default jika tidak ada diskon

  return (
    <div>

      {/* Menampilkan nama produk */}
      <h2>{name}</h2>

      {/* Jika diskon lebih dari 0 maka tampilkan harga awal */}
      {discount > 0 &&
        <p>
          <s>Rp {price}</s> ({discount}%)
        </p>
      }

      {/* Menampilkan harga setelah diskon */}
      <p>
        <b>
          Rp {
            parseInt(price) -
            parseInt(price) * (parseInt(discount) / 100)
          }
        </b>
      </p>

      {/* Garis pemisah */}
      <hr />

    </div>
  );
}


// =======================
// CONDITIONAL RENDERING
// =======================
function ConditionalExample(props) {

  // Jika isLoading = true
  if (props.isLoading) {

    // Tampilkan LoadingView
    return <LoadingView />

  } else {

    // Jika false tampilkan LoggedView
    return <LoggedView />

  }
}


// =======================
// TAMPILAN LOADING
// =======================
function LoadingView() {
  return (
    <h2>Loading...</h2>
  )
}


// =======================
// TAMPILAN SETELAH LOGIN
// =======================
function LoggedView() {

  // Membuat nama random
  const random = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals]
  });

  return <h2>Welcome {random}</h2>
}


// =======================
// GENERATE RANDOM NAME
// =======================
function GenerateRandomName() {

  // Variabel penampung nama random
  let randomName

  // Fungsi membuat nama random
  function createRandomName() {

    randomName = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals]
    });

    // Menampilkan alert
    alert(`Random Name: ${randomName}`)
  }

  return (

    // Saat tombol diklik jalankan createRandomName()
    <button onClick={createRandomName}>
      Generate Random Name
    </button>

  )
}


// =======================
// EVENT HANDLING
// =======================
function EventExample() {

  // Variabel menyimpan email
  let email = ""

  // Saat tombol diklik
  function handleClick() {

    // Menampilkan email yang diinput
    alert('Email: ' + email)

  }

  // Saat input berubah
  function handleChange(event) {

    // Mengambil nilai dari textbox
    email = event.target.value;

  }

  return (
    <div>

      <h4>Menangani Event</h4>

      {/* Input email */}
      <input
        type="email"

        // Event onChange berjalan saat user mengetik
        onChange={(event) => {
          handleChange(event)
        }}
      />

      {/* Tombol tampilkan email */}
      <button
        onClick={() => {
          handleClick()
        }}
      >
        Tampilkan Email
      </button>

    </div>
  )
}
