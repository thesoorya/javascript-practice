const itemsEle = document.querySelector('.items');

const datas = [
    {
        name: 'Ravi',
        empId: 9867,
        mailId: 'ravimail@gmail.com',
        Address: {
            CityName: 'Guntur', District: 'Prakasham  district',
            Pin: 685479,
        },
        Hobbies: ['Reading', 'Swimming', 'Baking']
    },
    {
        name: 'Ravi',
        empId: 9867,
        mailId: 'ravimail@gmail.com',
        Address: {
            CityName: 'Guntur', District: 'Prakasham  district',
            Pin: 685479,
        },
        Hobbies: ['Reading', 'Swimming', 'Baking']
    },
    {
        name: 'Ravi',
        empId: 9867,
        mailId: 'ravimail@gmail.com',
        Address: {
            CityName: 'Guntur', District: 'Prakasham  district',
            Pin: 685479,
        },
        Hobbies: ['Reading', 'Swimming', 'Baking']
    },
    {
        name: 'Ravi',
        empId: 9867,
        mailId: 'ravimail@gmail.com',
        Address: {
            CityName: 'Guntur', District: 'Prakasham  district',
            Pin: 685479,
        },
        Hobbies: ['Reading', 'Swimming', 'Baking']
    },
    {
        name: 'Ravi',
        empId: 9867,
        mailId: 'ravimail@gmail.com',
        Address: {
            CityName: 'Guntur', District: 'Prakasham  district',
            Pin: 685479,
        },
        Hobbies: ['Reading', 'Swimming', 'Baking']
    },
    {
        name: 'Ravi',
        empId: 9867,
        mailId: 'ravimail@gmail.com',
        Address: {
            CityName: 'Guntur', District: 'Prakasham  district',
            Pin: 685479,
        },
        Hobbies: ['Reading', 'Swimming', 'Baking']
    },
]

datas.forEach((data) => {
    const name = document.createElement('h1');
    const empId = document.createElement('p');
    const mailId = document.createElement('p');
    const address = document.createElement('p');
    const hobbies = document.createElement('p');

    name.textContent = `Name: ${data.name}`;
    empId.textContent = `Employee ID: ${data.empId}`;
    mailId.textContent = `Email: ${data.mailId}`;
    address.textContent = `Address: ${data.Address.CityName}, ${data.Address.District}, ${data.Address.Pin}`;
    hobbies.textContent = `Hobbies: ${data.Hobbies.join(', ')}`;

    itemsEle.appendChild(name);
    itemsEle.appendChild(empId);
    itemsEle.appendChild(mailId);
    itemsEle.appendChild(address);
    itemsEle.appendChild(hobbies);
});