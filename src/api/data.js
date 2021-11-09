const Users= []
const Posts = [
  {
    id: 1,
    title: 'Javascipt không chỉ có console.log',
    image: 'js-item1.jpg',
    category: 'series Javascrip nâng cao',
    date: new Date(2021, 9, 20),
    viewName: 'post-1',
    url: '/posts/1',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 2,
    title: 'Bất đồng bộ và những thứ liên quan trong Javascript',
    image: 'js-item2.jpg',
    category: 'series Javascrip nâng cao',
    date: new Date(2021, 10, 10),
    viewName: 'post-2',
    url: '/posts/2',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 3,
    title: 'How to use async-await',
    image: 'js-item3.jpg',
    category: 'series Javascrip nâng cao',
    date: new Date(2020, 5, 1),
    viewName: 'post-1',
    url: '/posts/3',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 4,
    title: 'Những khái niệm về web bạn nên biết',
    category: 'HTML và CSS',
    image: 'js-item4.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-4',
    url: '/posts/4',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 5,
    title: 'Flex box CSS',
    category: 'HTML và CSS',
    image: 'htmlcss1.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-5',
    url: '/posts/5',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 6,
    title: 'Tiêu chuẩn đặt tên BEM trong html',
    category: 'HTML và CSS',
    image: 'htmlcss2.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-6',
    url: '/posts/6',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 7,
    title: 'Cách học HTML CSS hiệu quả',
    category: 'HTML và CSS',
    image: 'htmlcss3.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-7',
    url: '/posts/7',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 8,
    title: 'Sự ra đời của React Hooks',
    category: 'ReactJS',
    image: 'react1.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-8',
    url: '/posts/8',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 9,
    title: 'Tất tần tật về React Hooks',
    category: 'Reactjs',
    image: 'react2.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-9',
    url: '/posts/9',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 10,
    title: 'React Hooks ảnh hưởng thế nào tới function component',
    category: 'ReactJS',
    image: 'react3.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-10',
    url: '/posts/10',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 11,
    title: '"Single page application" (SPA) hoạt động ra sao',
    category: 'HTML và CSS',
    image: 'react4.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-11',
    url: '/posts/11',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 12,
    title: 'React Dom và render UI',
    category: 'HTML và CSS',
    image: 'react5.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-12',
    url: '/posts/12',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 13,
    title: 'React element types',
    category: 'ReactJS',
    image: 'react6.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-13',
    url: '/posts/13',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 14,
    title: 'Work with JSX',
    category: 'Reactjs',
    image: 'react67jpg.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-14',
    url: '/posts/14',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 15,
    title: 'Two way biding là gì?',
    category: 'ReactJS',
    image: 'react8.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-15',
    url: '/posts/15',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 16,
    title: 'Nên code bao nhiêu tiếng một ngày',
    category: 'Experience',
    image: 'abm1-1.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-16',
    url: '/posts/16',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 17,
    title: 'Cách học front end hiệu quả',
    category: 'Experience',
    image: 'abm1-3.jpeg',
    date: new Date(2021, 7, 20),
    viewName: 'post-17',
    url: '/posts/17',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 18,
    title: 'Kinh nghiệm phỏng vấn',
    category: 'Experience',
    image: 'abm1-4.png',
    date: new Date(2021, 7, 20),
    viewName: 'post-18',
    url: '/posts/18',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 19,
    title: 'Cách biết mình có thực sự đam mê với lập trình',
    category: 'Experience',
    image: 'abm1-5.jpg',
    date: new Date(2021, 7, 20),
    viewName: 'post-19',
    url: '/posts/19',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
  {
    id: 20,
    title: 'So sánh mức lương của các ngành trong lĩnh vực CNTT',
    category: 'Experience',
    image: 'abm2.png',
    date: new Date(2021, 7, 20),
    viewName: 'post-20',
    url: '/posts/20',
    intro: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
  },
]

module.exports = {
  posts: Posts,
  users: Users
}