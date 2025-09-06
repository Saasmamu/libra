/*
 * SPDX-License-Identifier: AGPL-3.0-only
 * env.mjs
 * Copyright (C) 2025 Nextify Limited
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 *
 */

import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    ANTHROPIC_API_KEY: z.string().optional(),
    OPENAI_API_KEY: z.string().optional(),
    E2B_API_KEY: z.string().optional(),
    GEMINI_API_KEY: z.string().optional(),
    XAI_API_KEY: z.string().optional(),
    OPENROUTER_API_KEY: z.string().optional(),
    CUSTOM_API_KEY: z.string().optional(),
    DEEPSEEK_API_KEY: z.string().optional(),
    DATABRICKS_TOKEN: z.string().optional(),
    DATABRICKS_BASE_URL: z.string().optional(),
    BETTER_AUTH_SECRET: z.string().optional(),
    BETTER_GITHUB_CLIENT_ID: z.string().optional(),
    BETTER_GITHUB_CLIENT_SECRET: z.string().optional(),
    GITHUB_OAUTH_CLIENT_ID: z.string().optional(),
    GITHUB_OAUTH_CLIENT_SECRET: z.string().optional(),
    RESEND_API_KEY: z.string().optional(),
    RESEND_FROM: z.string().optional(),
    PAYLOAD_SECRET: z.string().optional(),
    CLOUDFLARE_ZONE_ID: z.string().optional(),
    LOG_LEVEL: z.string().optional(),
    AI_MODEL: z.string().optional(),
    AI_PROVIDER: z.string().optional(),
    AI_BASE_URL: z.string().optional(),
    POSTGRES_URL: z.string().optional(),
    ENHANCED_PROMPT: z.boolean().optional(),
    REASONING_ENABLED: z.boolean().optional(),
    CLOUDFLARE_AIGATEWAY_NAME: z.string().optional(),
    CLOUDFLARE_ACCOUNT_ID: z.string().optional(),
    STRIPE_SECRET_KEY: z.string().optional(),
    STRIPE_WEBHOOK_SECRET: z.string().optional(),
    DATABASE_ID: z.string().optional(),
    CLOUDFLARE_API_TOKEN: z.string().optional(),
    TURNSTILE_SECRET_KEY: z.string().optional(),
    AZURE_DEPLOYMENT_NAME: z.string().optional(),
    AZURE_RESOURCE_NAME: z.string().optional(),
    AZURE_API_KEY: z.string().optional(),
    AZURE_BASE_URL: z.string().optional(),
  },
client: {
  NEXT_PUBLIC_APP_URL: z.string().optional(),
  NEXT_PUBLIC_CDN_URL: z.string().optional(),
  NEXT_PUBLIC_DEPLOY_URL: z.string().optional(),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z.string().optional(),
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  NEXT_PUBLIC_SANDBOX_DEFAULT_PROVIDER: z.enum(['e2b', 'daytona']).optional(),
  NEXT_PUBLIC_SANDBOX_BUILDER_DEFAULT_PROVIDER: z.enum(['e2b', 'daytona']).optional(),
  NEXT_PUBLIC_SCREENSHOT_URL: z.string().optional(), // <-- add this
},

 runtimeEnv: {
  NEXT_PUBLIC_APP_URL: process.env['NEXT_PUBLIC_APP_URL'] || '',
  NEXT_PUBLIC_CDN_URL: process.env['NEXT_PUBLIC_CDN_URL'] || '',
  NEXT_PUBLIC_DEPLOY_URL: process.env['NEXT_PUBLIC_DEPLOY_URL'] || '',
  NEXT_PUBLIC_SCREENSHOT_URL: process.env['NEXT_PUBLIC_SCREENSHOT_URL'] || '', // now matches client
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: process.env['NEXT_PUBLIC_TURNSTILE_SITE_KEY'] || '',
  NEXT_PUBLIC_POSTHOG_KEY: process.env['NEXT_PUBLIC_POSTHOG_KEY'] || '',
  NEXT_PUBLIC_POSTHOG_HOST: process.env['NEXT_PUBLIC_POSTHOG_HOST'] || '',
  NEXT_PUBLIC_GA_ID: process.env['NEXT_PUBLIC_GA_ID'] || '',
  NEXT_PUBLIC_SANDBOX_DEFAULT_PROVIDER: process.env['NEXT_PUBLIC_SANDBOX_DEFAULT_PROVIDER'] || 'e2b',
  NEXT_PUBLIC_SANDBOX_BUILDER_DEFAULT_PROVIDER: process.env['NEXT_PUBLIC_SANDBOX_BUILDER_DEFAULT_PROVIDER'] || 'e2b',

    ANTHROPIC_API_KEY: process.env['ANTHROPIC_API_KEY'] || '',
    OPENAI_API_KEY: process.env['OPENAI_API_KEY'] || '',
    E2B_API_KEY: process.env['E2B_API_KEY'] || '',
    GEMINI_API_KEY: process.env['GEMINI_API_KEY'] || '',
    XAI_API_KEY: process.env['XAI_API_KEY'] || '',
    OPENROUTER_API_KEY: process.env['OPENROUTER_API_KEY'] || '',
    CUSTOM_API_KEY: process.env['CUSTOM_API_KEY'] || '',
    DEEPSEEK_API_KEY: process.env['DEEPSEEK_API_KEY'] || '',
    DATABRICKS_TOKEN: process.env['DATABRICKS_TOKEN'] || '',
    DATABRICKS_BASE_URL: process.env['DATABRICKS_BASE_URL'] || '',
    BETTER_AUTH_SECRET: process.env['BETTER_AUTH_SECRET'] || '',
    BETTER_GITHUB_CLIENT_ID: process.env['BETTER_GITHUB_CLIENT_ID'] || '',
    BETTER_GITHUB_CLIENT_SECRET: process.env['BETTER_GITHUB_CLIENT_SECRET'] || '',
    GITHUB_OAUTH_CLIENT_ID: process.env['GITHUB_OAUTH_CLIENT_ID'] || '',
    GITHUB_OAUTH_CLIENT_SECRET: process.env['GITHUB_OAUTH_CLIENT_SECRET'] || '',
    RESEND_API_KEY: process.env['RESEND_API_KEY'] || '',
    RESEND_FROM: process.env['RESEND_FROM'] || '',
    PAYLOAD_SECRET: process.env['PAYLOAD_SECRET'] || '',
    CLOUDFLARE_ZONE_ID: process.env['CLOUDFLARE_ZONE_ID'] || '',
    LOG_LEVEL: process.env['LOG_LEVEL'] || '',
    AI_MODEL: process.env['AI_MODEL'] || '',
    AI_PROVIDER: process.env['AI_PROVIDER'] || '',
    AI_BASE_URL: process.env['AI_BASE_URL'] || '',
    POSTGRES_URL: process.env['POSTGRES_URL'] || 'dummy_postgres',
    ENHANCED_PROMPT: process.env['ENHANCED_PROMPT'] === 'TRUE',
    AZURE_DEPLOYMENT_NAME: process.env['AZURE_DEPLOYMENT_NAME'] || '',
    AZURE_RESOURCE_NAME: process.env['AZURE_RESOURCE_NAME'] || '',
    AZURE_API_KEY: process.env['AZURE_API_KEY'] || '',
    AZURE_BASE_URL: process.env['AZURE_BASE_URL'] || '',
    REASONING_ENABLED: process.env['REASONING_ENABLED'] === 'TRUE',
    CLOUDFLARE_ACCOUNT_ID: process.env['CLOUDFLARE_ACCOUNT_ID'] || '',
    CLOUDFLARE_AIGATEWAY_NAME: process.env['CLOUDFLARE_AIGATEWAY_NAME'] || '',
    STRIPE_SECRET_KEY: process.env['STRIPE_SECRET_KEY'] || 'dummy_stripe',
    STRIPE_WEBHOOK_SECRET: process.env['STRIPE_WEBHOOK_SECRET'] || 'dummy_webhook',
    DATABASE_ID: process.env['DATABASE_ID'] || 'dummy_database',
    CLOUDFLARE_API_TOKEN: process.env['CLOUDFLARE_API_TOKEN'] || 'dummy_cf_token',
    TURNSTILE_SECRET_KEY: process.env['TURNSTILE_SECRET_KEY'] || 'dummy_turnstile',
  },
})
