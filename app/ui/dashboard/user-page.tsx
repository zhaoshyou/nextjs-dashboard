//import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
export default async function Userchoices() {
  const userchoices = [
    { id: "账号设置", name: "账号设置", link: "/accoset" },
    { id: "问题反馈", name: "问题反馈", link: "/feedback" },
    { id: "离线缓存", name: "离线缓存", link: "/cache" }
  ]
  return (
    <div className="flex w-full flex-col ">
      <div className="flex items-center">
      <Image
        src="/yousa.png"
        className="float-left md:block align-middle rounded-full"
        width={64}
        height={64}
        alt="you" />
        <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl float-right mx-12`}>
          您好！
        </h2>
        </div>
        <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4 mt-12">
          {/* NOTE: comment in this code when you get to this point in the course */}

          <div className="bg-white px-6">
            {userchoices.map((choice, i) => {
              return (


                <Link
                  key={choice.id}
                  href={choice.link}
                  className={clsx(
                    'flex flex-row items-center justify-between py-5',
                    {
                      'border-t': i !== 0,
                    },

                  )}
                >
                  <div className="flex items-center">
                    {/* <Image
                     src=''
                    alt={`${choice.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  /> */}

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold md:text-base">
                        {choice.name}
                      </p>
                      {/* <p className="hidden text-sm text-gray-500 sm:block">
                      {choice.email}
                    </p> */}
                    </div>
                  </div>
                  {/* <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {invoice.amount}
                </p> */}
                </Link>

              );
            })}
          </div>
          <div className="flex items-center pb-2 pt-6">
            {/* <ArrowPathIcon className="h-5 w-5 text-gray-500" /> 
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>*/}
          </div>
        </div>
    </div>
  );
}
