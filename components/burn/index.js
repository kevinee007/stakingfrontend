import { useState } from 'react'
import { ethers } from 'ethers'
import { ERC20, burnerPolygon } from '../../contracts'
import {
    Button,
    Heading,
    Input,
    Stack,
    Text,
    Textarea
  } from '@chakra-ui/react'
  import { web3 } from '../../utils/ethers'

  
  export default function Burn() {
    const [cndlAmount, setCndlAmount] = useState('')
    const [burnMessage, setburnMessage] = useState('')


    async function onApprove() {
        if (cndlAmount > 0) {
            const signer = web3.getSigner()
            const CNDL_POLYGON = "0x5423063af146F5abF88Eb490486E6B53FA135eC9"
            const cndlContract = new ethers.Contract(CNDL_POLYGON, ERC20.abi, signer)
          await cndlContract.approve(burnerPolygon.address, ethers.utils.parseUnits(cndlAmount, 18))
        }
      }
    
    async function onBurn() {
        if (cndlAmount > 0) {
            const signer = web3.getSigner()
            const burnerContract = new ethers.Contract(burnerPolygon.address, burnerPolygon.abi, signer)
            await burnerContract.burnWithMessage(
            ethers.utils.parseUnits(cndlAmount, 18),
            burnMessage
            )
        }
    }


    return (
      <>
        <Heading ml="4" mt="16" mb="4" size="md">
          Burn your CNDL
        </Heading>
        <Text>CNDL Amount:</Text>
        <Input
            value={cndlAmount}
            onChange={e => setCndlAmount(e.target.value)}
            placeholder="CNDL amount"
        />
        <Text>Message:</Text>
        <Textarea
            value={burnMessage}
            onChange={e => setburnMessage(e.target.value)}
            placeholder="Note down your message"
        />

        <Stack direction='row' spaceing={4}>
            <Button onClick={onApprove} colorScheme='blue'>Approve</Button>
            <Button onClick={onBurn} colorScheme='blue'>Burn</Button>
        </Stack>
      </>
    )
  }
  