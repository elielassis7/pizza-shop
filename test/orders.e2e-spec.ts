import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('cell', { name: 'customerName-1', exact: true }),
  ).toBeVisible()

  await expect(
    page.getByRole('cell', { name: 'customerName-10' }),
  ).toBeVisible()
})

test('pagination orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Proxima página' }).click()

  expect(
    page.getByRole('cell', { name: 'customerName-11', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'customerName-20' })).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()

  expect(
    page.getByRole('cell', { name: 'customerName-51', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'customerName-60' })).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()

  expect(
    page.getByRole('cell', { name: 'customerName-41', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'customerName-50' })).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()

  expect(
    page.getByRole('cell', { name: 'customerName-1', exact: true }),
  ).toBeVisible()
  expect(page.getByRole('cell', { name: 'customerName-10' })).toBeVisible()
})

test('filter by test id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('ID do pedido').fill('order-11')

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(page.getByRole('cell', { name: 'order-11' })).toBeVisible()
})

test('filter by test cutomer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Nome do cliente').fill('customerName-11')

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(page.getByRole('cell', { name: 'customerName-11' })).toBeVisible()
})

test('filter by test status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()

  await page.getByLabel('Pendente').getByText('Pendente').click()

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()
  await expect(page.getByRole('cell', { name: 'Pendente' })).toHaveCount(10)
})
