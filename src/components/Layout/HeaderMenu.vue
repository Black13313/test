<script setup lang="ts">
import { h, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { MenuProps } from 'ant-design-vue';
const current = ref<string[]>(['mail']);
const items = ref<MenuProps['items']>([
  {
    key: 'mail',
    label: 'Navigation One',
    title: 'Navigation One',
  },
  {
    key: 'app',
    label: 'Navigation Two',
    title: 'Navigation Two',
  },
  {
    key: 'sub1',
    label: 'Navigation Three - Submenu',
    title: 'Navigation Three - Submenu',
  },
  {
    key: 'app',
    label: 'Navigation Two',
    title: 'Navigation Two',
  },
  {
    key: 'sub1',
    label: 'Navigation Three - Submenu',
    title: 'Navigation Three - Submenu',
  },
  {
    key: 'app',
    label: 'Navigation Two',
    title: 'Navigation Two',
  },
  {
    key: 'sub1',
    label: 'Navigation Three - Submenu',
    title: 'Navigation Three - Submenu',
  },
  {
    key: 'app',
    label: 'Navigation Two',
    title: 'Navigation Two',
  },
  {
    key: 'sub1',
    label: 'Navigation Three - Submenu',
    title: 'Navigation Three - Submenu',
  },
  {
    key: 'alipay',
    label: h('a', { href: 'https://antdv.com', target: '_blank' }, 'Navigation Four - Link'),
    title: 'Navigation Four - Link',
  },
]);
</script>

<template>
  <div>
    <header class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <a class="block text-teal-600 text-4xl" href="#">
              <span class="sr-only ">Home</span>
              Shopping BK
            </a>
          </div>



          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <a
                  class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
              >
                Login
              </a>

              <div class="hidden sm:flex">
                <a
                    class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    href="#"
                >
                  Register
                </a>
              </div>
            </div>

            <div class="block md:hidden">
              <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="shadow-xl">
      <a-menu v-model:selectedKeys="current" mode="horizontal" :items="items" />
    </div>
  </div>
</template>

<style scoped>

</style>
