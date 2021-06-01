document.addEventListener('DOMContentLoaded', function () {
  new Splide('#card-slider-2', {
    perPage: 1,
    type: 'loop',
    height: 400,
    breakpoints: {
      600: {
        perPage: 1,
      },
    },
  }).mount();
});

document.addEventListener('submit', (e) => {
  const url = 'https://cuengine.orgzit.com/api/1/record/';
  const form = document.getElementById('form');
  const formName = document.getElementById('name').value;
  const formPhone = document.getElementById('phone').value;
  const formMessage = document.getElementById('message').value;

  const formData = {
    dataform: '/api/1/dataform/pbynssdk2f/',
    use_field_slug: true,
    dataform_id: 'pbynssdk2f',
    fields: {
      name: formName,

      phone: formPhone,

      message: formMessage,

      source: 'cuengineturkey.com',
    },
  };

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'ApiKey bilalkeskin_94:523dacb2edb8d851cd3849f2c5b19b5ad6d20188',
      },
      body: JSON.stringify(data),
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  postData(url, formData)
    .then((data) => {
      alert(
        'You have succesfully send your information to us! Our team will contact you shortly.'
      );
      console.log(data);
      return form.reset();
    })
    .catch((err) => {
      console.error(err);
    });
  e.preventDefault();
});
