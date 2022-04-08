import {Fragment} from "react"
import {Disclosure, Menu, Transition} from "@headlessui/react"
import {BellIcon, MenuIcon, XIcon} from "@heroicons/react/outline"
import Image from "next/image"
import Link from "next/link"
import classNames from "classnames"

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-slate-50">
      {({open}) => (
        <>
          <div className="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">

              <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <Image src="/assets/Failed.svg" alt="Failed FM" height={40} width={110}/>
                  </Link>
                </div>
                <div className="ml-6 flex space-x-8">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 my-3 border-2 border-gray-700 shadow-sm text-base font-medium text-gray-800 bg-white hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Say Hello...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
