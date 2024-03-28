// 'use client';
// import {
//   BanknotesIcon,
//   ClockIcon,
//   UserGroupIcon,
//   InboxIcon,
// } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
// import React, { useState, useEffect } from 'react'

// const [data, setData] = useState([])

//   useEffect(() => {
//     fetchData()
//   }, [])

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('/api/getdata')
  //     const res = await response.json()
  //     const data = res.data[0]
  //     setData(data.title)
  //     //console.log('data: ', data)
  //   } catch (error) {
      
  //     console.error('Error fetching data:', error)
  //   }
  //}
// const iconMap = {
//   collected: BanknotesIcon,
//   customers: UserGroupIcon,
//   pending: ClockIcon,
//   invoices: InboxIcon,
// };

export default async function CardWrapper() {
  const {
    title_is,
    picture_url,
    video_link,
    // numberOfInvoices,
    // numberOfCustomers,
    // totalPaidInvoices,
    // totalPendingInvoices,
  } = await fetchCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title={title_is}      picture={picture_url} link={ video_link}/>
      <Card title={title_is}      picture={picture_url} link={ video_link}/>
      <Card title={title_is}      picture={picture_url} link={ video_link}/>
      <Card title={title_is}      picture={picture_url} link={ video_link}/>
      {/* <Card title="Pending"         picture="" link="pending"   />
      <Card title="Total Invoices"  picture="" link="invoices"  />
      <Card title="Total Customers" picture="" link="customer"  /> */}
    </>
  );
}

export function Card({
  title,
 picture,
  link,
}: {
  title: string;
  picture:  string;
  link: string;
}) {
  //const img = imgMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-4 text-center text-2xl h-40 w-30`}
      >
        
      </p>
      <div className="flex p-4 h-10 w-16">
        {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
        <h3 className="ml-2 text-sm font-medium ">{title}</h3>
      </div>
    </div>
  );
}
