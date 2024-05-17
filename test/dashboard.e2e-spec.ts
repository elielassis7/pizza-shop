import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(
    page.getByRole('heading', { name: 'Receita Total (mês)' }),
  ).toBeVisible()
  await expect(page.getByText('R$ 20,00')).toBeVisible()
  await expect(page.getByText('+10% em relação ao mês passado')).toBeVisible()

  await expect(
    page.getByRole('heading', { name: 'Pedidos (mês)' }),
  ).toBeVisible()
  await expect(page.getByText('40', { exact: true })).toBeVisible()
  await expect(page.getByText('7% em relação ao mês passado')).toBeVisible()

  await expect(
    page.getByRole('heading', { name: 'Receita Total (dia)' }),
  ).toBeVisible()
  await expect(page.getByText('20', { exact: true }).first()).toBeVisible()
  await expect(page.getByText('-5% em relação a ontem')).toBeVisible()

  await expect(
    page.getByRole('heading', { name: 'Cancelamentos (mês)' }),
  ).toBeVisible()
  await expect(page.getByText('20', { exact: true }).nth(1)).toBeVisible()
  await expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()
})
