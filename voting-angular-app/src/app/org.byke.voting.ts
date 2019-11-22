import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.byke.voting{
   export class ifVoted extends Asset {
      voterID: string;
      votedOrNot: boolean;
   }
   export class candidateVote extends Asset {
      politicalParty: string;
      totalVote: number;
   }
   export class voter extends Participant {
      voterID: string;
      fullName: string;
   }
   export class vote extends Transaction {
      candidateVoteAsset: candidateVote;
      ifVotedAsset: ifVoted;
   }
   export class VoteNotification extends Event {
      candidateVoteAsset: candidateVote;
   }
// }
