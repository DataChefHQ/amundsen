# Copyright Contributors to the Amundsen project.
# SPDX-License-Identifier: Apache-2.0

import importlib
import logging
from typing import Any, Dict

from pyhocon import ConfigTree

from databuilder.transformer.base_transformer import Transformer
from databuilder.models.elasticsearch_document import ElasticsearchDocument


LOGGER = logging.getLogger(__name__)


class ModelToDict(Transformer):
    """
    Transforms model into dict
    """

    def init(self, conf: ConfigTree) -> None:
        pass

    def transform(self, record: ElasticsearchDocument) -> Dict[str, Any]:
        return record.to_json()

    def get_scope(self) -> str:
        return 'transformer.model_to_dict'
