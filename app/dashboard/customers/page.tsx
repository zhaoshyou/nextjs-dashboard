import UserChoices from '@/app/ui/dashboard/user-page';
import { Suspense } from 'react';
import {  LatestInvoicesSkeleton} from '@/app/ui/skeletons';

export default function Page(){
    return (
    <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <UserChoices />
                </Suspense>)
}