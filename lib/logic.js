/*
 *@param {org.byke.voting.vote} vote
 *@transaction
 */

async function vote(vote) {
    if (!vote.ifVotedAsset.votedOrNot) {
        vote.candidateVoteAsset.totalVote = vote.candidateVoteAsset.totalVote + 1;
        return getAssetRegistry('org.byke.voting.candidateVote')
            .then(function (assetRegistry) {
                return assetRegistry.update(vote.candidateVoteAsset);
            })
            .then(function () {
                return getAssetRegistry('org.byke.voting.ifVoted')
                    .then(function (assetRegistry) {
                        vote.ifVotedAsset.votedOrNot = true;
                        return assetRegistry.update(vote.ifVotedAsset);
                    })
            });
    } else {
        throw new Error('Vote already submitted!');
    }
}
