import { createContext, useContext } from 'react';
import {
  Program,
  AnchorProvider,
  Idl,
  setProvider,
} from '@project-serum/anchor';
import { AnchorMovie, IDL } from './anchor_review';
import { Connection, PublicKey } from '@solana/web3.js';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import MockWallet from './MockWallet';

const WorkspaceContext = createContext({});
const programId = new PublicKey('H1sxQUz8KLS2uy4j5peGUc8FvcPfoZeiAqt9iyT4XRuT');

interface Workspace {
  connection?: Connection;
  provider?: AnchorProvider;
  program?: Program<AnchorMovie>;
}

const WorkspaceProvider = ({ children }: any) => {
  const wallet = useAnchorWallet() || MockWallet;
  const { connection } = useConnection();

  const provider = new AnchorProvider(connection, wallet, {});
  setProvider(provider);

  const program = new Program(IDL as Idl, programId);
  const workspace = {
    connection,
    provider,
    program,
  };

  return (
    <WorkspaceContext.Provider value={workspace}>
      {children}
    </WorkspaceContext.Provider>
  );
};

const useWorkspace = (): Workspace => {
  return useContext(WorkspaceContext);
};

export { WorkspaceProvider, useWorkspace };
