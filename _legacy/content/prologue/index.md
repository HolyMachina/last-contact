---
title: Synopsis 
section: Act 00 - The Prologue
description: Last Contact is a sci-fi political thriller space opera set in the 23rd and 24th centuries. Act 00 - Prologue sees Tim Li, as the president reflect on his actions and asks humanity to forgive him and let him go.
author: Josie Troiani
asIndexPage: true
---
import { Cards } from 'nextra/components'
import { MDXRemote } from 'nextra/mdx-remote'
import { createIndexPage, getPageMap } from 'nextra/page-map'

# Act 00: The Prologue

## Synopsis

Tim Li, as the president reflects on his actions and asks humanity to forgive him and let him go.

## Chapters

<MDXRemote
  compiledSource={
    await createIndexPage(
      await getPageMap('/prologue')
    )
  }
  components={{
    Cards
  }}
/>
