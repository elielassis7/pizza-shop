import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up ', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do Estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('John doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu telefone').fill('Pizza shop')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso!')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up ', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do Estabelecimento').fill('Invalid name')
  await page.getByLabel('Seu nome').fill('John doe')
  await page.getByLabel('Seu e-mail').fill('johndoe@example.com')
  await page.getByLabel('Seu telefone').fill('Pizza shop')
  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-up ', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')

  await page.waitForTimeout(2000)
})