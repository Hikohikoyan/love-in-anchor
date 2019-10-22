import axios from 'axios'
axios.get('../../public/colledge.json')
  .then(function (response) {
    console.log(response);
    }
  )